import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { userUrl } from "../api/api.js";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const userId = sessionStorage.getItem("userId")
        
        if (userId) {
            const fetchUser = async () => {
                try {
                    const response = await axios.get(`${userUrl}/${userId}`)
                    setAuthUser(response.data)
                } catch (error) {
                    setAuthUser(null)
                }
            }
            fetchUser()
        }
    }, [])

    const registerUser = async (userData) => {
        try {
            const exist = await axios.get(`${userUrl}?email=${userData.email}`)
            if (exist.data.length > 0) {
                return { error: "exist" }
            }
            const response = await axios.post(userUrl, userData)
            return { user: response.data }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                try{
                    const response = await axios.post(userUrl, userData)
                    return { user: response.data }
                }catch(error){
                    return { error: "server-error" }
                }
            }
            return { error: "server-error"}
        }
    }

    const loginUser = async (userData) => {
        try {
            const response = await axios.get(`${userUrl}?email=${userData.email}`)
            
            const user = response.data[0]
            if (user.password !== userData.password) {
                return { error: "invalid-credentials" }
            }
            setAuthUser(user)
            sessionStorage.setItem("userId", user.id)
            return { user }
        } catch (error) {
            if (error.response.status === 404) {
                return { error: "not-found" }
            }
        }
    }

    const logoutUser = () => {
        setAuthUser(null)
        sessionStorage.removeItem("userId")
    }

    return (
        <AuthContext.Provider value={{ registerUser, loginUser, authUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}