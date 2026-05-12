import { useReducer, createContext } from "react";

export const BlogsContext = (state, action) => {
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
    }
}