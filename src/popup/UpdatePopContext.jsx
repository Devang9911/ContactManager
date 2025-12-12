import { createContext, useState } from "react";

export const UpdatePopContext = createContext(null)

export const UpdatePopProvider = ({ children }) => {

    const [updateState, setUpdateState] = useState({
        visible: false,
        contact: null,
        onClose: null
    });

    const showUpdatePop = (contact, onClose = null) => {
        setUpdateState({
            visible: true,
            contact,
            onClose
        })
    }

    const closeUpdatePop = () => {
        if (updateState.onClose) updateState.onClose();
        setUpdateState({
            visible: false,
            contact: null,
            onClose: null
        });
    }

    return (
        <UpdatePopContext.Provider value={{ showUpdatePop, closeUpdatePop, updateState }}>
            {children}
        </UpdatePopContext.Provider>
    )
}