import axios from 'axios';

export type PostType = {
    id: number;
    title: string;
    body: string;
}

export const fetchData = async () => {
    try {
        const response = await axios.get<{ posts: PostType[] }>('https://dummyjson.com/posts');
        const responseData = response.data.posts;
        console.log("list of posts", responseData);
        return responseData;
    } catch (error) {
        console.log("Error getting post:", error);
    }
};