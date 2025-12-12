import { createContext, useState, useEffect, use } from "react";
import { contactsUrl } from "../api/api.js";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

export const ContactContext = createContext()

export const ContactProvider = ({ children }) => {

    const [contacts, setContacts] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const { authUser } = useAuth()
    
    

    useEffect(() => {
        if (!authUser){
            setContacts([])
            return
        }
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`${contactsUrl}?userId=${authUser.id}`)
                setContacts(response.data)
                
            } catch (error) {
                setContacts([])
            }
        }
        fetchContacts()
    }, [authUser , refresh])

    const addContact = async (data) => {
        const response = await axios.post(contactsUrl, data)
        setRefresh(prev => !prev)
        return { contact: response.data }
    }

    const deleteContact = async (id) => {
        await axios.delete(`${contactsUrl}/${id}`)
        setRefresh(prev => !prev)
    }




    return (
        <ContactContext.Provider value={{ addContact, contacts, deleteContact}}>
            {children}
        </ContactContext.Provider>
    )
}