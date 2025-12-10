import { createContext, useState } from "react";

export const PopupContext = createContext(null)

export const PopupProvider = ({ children }) => {

    const [popup, setPopup] = useState({
        visible: false,
        title: "",
        message: "",
        type: "success",
        onClose: null
    })

    const showPopup = (title, message, type = "success", onClose = null) => {
        setPopup({
            visible: true,
            title,
            message,
            type,
            onClose
        })
    }

    const hidePopup = () => {
        if (popup.onClose) popup.onClose(); 
        setPopup({
            visible: false,
            title: "",
            message: "",
            type: "success",
            onClose: null, 
        });
    };

    return (
        <PopupContext.Provider value={{popup , showPopup , hidePopup}}>
            {children}
        </PopupContext.Provider>
    )
}