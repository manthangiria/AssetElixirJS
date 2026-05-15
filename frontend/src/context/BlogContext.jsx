import { useReducer, createContext } from "react";

export const BlogContext = createContext();

export const blogsReducer = (state, action) => {
    switch(action.type){
        case "SET_INITIAL_BLOGS":
            return {
                ...state, 
                all_blogs: action.payload,
                blogs    : action.payload
            }
        case "ADD_BLOG_OPTIMISTIC":
            return {
                ...state, 
                all_blogs: [action.payload, ...state.all_blogs],
                blogs    : [action.payload, ...state.blogs]
            }
        case "FILTER_BLOGS":
            return {
                ...state,
                blogs : action.payload
            }

        case "RESET_BLOGS":
            return {
                ...state,
                blogs : all_blogs
            }
        
        default:
            return state;
    }
}

export const BlogContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(blogsReducer,{
        all_blogs:[],
        blogs:[]
    })

    return (
        <BlogContext.Provider value={{...state, dispatch}}>
            {children}
        </BlogContext.Provider>
    )
};