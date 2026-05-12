import { useAuthContext } from "./useAuthContext";
import { useBlogContext } from "./useBlogContext";

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch:blogDispatch} = useBlogContext();

    const logout = () => {
        localStorage.removeItem('asstUsr');
        dispatch({type:"LOGOUT"});
        blogDispatch({type:"SET_INITIAL_BLOGS", payload:null});
    }
}