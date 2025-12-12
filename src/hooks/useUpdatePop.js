import { useContext } from "react";
import { UpdatePopContext } from "../popup/UpdatePopContext";

export const useUpdatePop = ()=>{
    return useContext(UpdatePopContext)
}