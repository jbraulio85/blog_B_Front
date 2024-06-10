import { useState, useEffect } from "react";
import { getPosts } from "../services";

export const usePosts = () => {
    const [posts, setPosts ] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await getPosts();
            !response.error ? setPosts(response.data.posts) : console.log(response.e);
        };
        fetchPosts();
    }, []);

    return posts;
};