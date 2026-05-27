import { useState } from "react";
import { useAuthContext } from "./useAuthContext";



export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isloading, setIsloading] = useState(false);
    const {dispatch} = useAuthContext();

    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

    const signup = async (name, password) => {
        setIsloading(true);
        setError(null);
        const resp = await fetch(`/api/users/signup`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name, password})
        })
        const json = await resp.json();
        if (!resp.ok){
            setIsloading(false);
            setError(json.error);
        }
        if (resp.ok){
            localStorage.setItem('asstUsr',JSON.stringify(json));
            dispatch({type:"LOGIN",payload:json});
            setIsloading(false);
        }
    }
    return {signup, error, isloading}
}