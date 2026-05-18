import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const apiUrl = import.meta.env.VITE_API_URL;

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isloading, setIsloading] = useState(null);
    const {dispatch} = useAuthContext();

    const login = async (username,password) => {
        // const {username, password} = formData;
        setIsloading(true);
        setError(null);
        const resp = await fetch(`${apiUrl}/api/users/login`,{
            method:'POST',
            headers: {"Content-Type":'application/json'},
            body:JSON.stringify({name:username,password:password})
        });
        const json = await resp.json();
        if (!resp.ok){
            setIsloading(false);
            setError(json.error);
        }
        else if (resp.ok){
            localStorage.setItem('asstUsr',JSON.stringify(json));
            dispatch({type:"LOGIN",payload:json});
            setIsloading(false);
            setError(null);
        }
    };

    return {login, error, isloading};
};