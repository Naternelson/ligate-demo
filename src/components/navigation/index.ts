import { To, useNavigate } from "react-router-dom";

export function useNavigator(){
    const navigate = useNavigate()
    const to = (to:To) => ()=> navigate(to)
    return [to]
}