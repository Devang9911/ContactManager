import { useContext } from "react";
import { PopupContext } from "../popup/PopupContext";

export const usePopup = ()=>{
    return useContext(PopupContext)
}