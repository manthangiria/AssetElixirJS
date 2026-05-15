import { useContext } from "react";
import { BlogContext } from '../context/BlogContext';

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw Error("useBlogsContext must be used inside components that have access to BlogsContext!");
    }
    return context;
}