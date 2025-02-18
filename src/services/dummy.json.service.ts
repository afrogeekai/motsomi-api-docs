import axios, { AxiosResponse } from 'axios';

export const fetchData = async () => {
    try {
        const response: AxiosResponse = await axios.get('https://dummyjson.com/posts');
        const responseData = response.data;
        console.log("list of posts", responseData);
        return responseData.data.posts
    } catch (error) {
        console.log("error", error);
    }
};