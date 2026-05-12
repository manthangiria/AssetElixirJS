import { useContext } from "react";
import { BlogsContext } from '../context/BlogsContext';

export const useBlogContext = () => {
    const context = useContext(BlogsContext);
    if (!context) {
        throw Error("useBlogsContext must be used inside components that have access to BlogsContext!");
    }
    return context;
}