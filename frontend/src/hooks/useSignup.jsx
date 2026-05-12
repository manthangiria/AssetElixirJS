import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
const apiUrl = import.meta.env.VITE_API_URL;

export const useSignup = () => {
    const [error,setError]         = useState(null);
    const [isloading,setIsloading] = useState(null);
    const {dispatch}               = useAuthContext();

    const signup = async (formD) => {
        setIsloading(true);
        setError(null);
        const {email,password,name:username} = formD;
        const resp = await fetch(`${apiUrl}/api/users/signup`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password,username})
        });
        const json = await resp.json();
        if (!resp.ok){
            setIsloading(false);
            setError(json.error);
        }
        if (resp.ok){
            console.log(json._doc)
            localStorage.setItem('asstUsr',JSON.stringify(json));
            dispatch({type:"LOGIN",payload:json});
            setIsloading(false);
        }
    }
    return {signup,error,isloading};
}