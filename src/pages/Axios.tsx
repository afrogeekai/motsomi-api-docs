import { useEffect, useState } from 'react';
import { fetchData, PostType } from '../services/dummy.json.service';

export const Axios = () => {

    const [posts, setPosts] = useState<PostType[] | null>()
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // to display on console ONLY (straight from the service)
        fetchData()
    }, [])

    const getAllPosts = async () => {
        const posts: PostType[] = await fetchData() ?? []
        setPosts(posts)
        setIsVisible(!isVisible)
    }

    return (
        <div className='p-6'>
            <div className="dark:bg-gray-700 p-4">
                <div className="relative py-4 overflow-hidden">
                    <div aria-hidden="true" className="absolute inset-0 w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"></div>
                    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                        <div className="relative">
                            <div className="flex items-center justify-center h-[20vh] px-2 sm:px-0">
                                <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
                                    {/* HEADER */}
                                    <h1
                                        className="text-center text-2xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-white">
                                        Get Posts Via Axios
                                    </h1>
                                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 ">
                                        {/* SHOW/HIDE BUTTON */}
                                        <button
                                            onClick={getAllPosts}
                                            className="relative flex h-12 w-full items-center justify-center px-8 
                                                   rounded-full border bottom-1 border-gray-950 before:transition 
                                                    active:duration-75 active:before:scale-95 sm:w-max">
                                            <span className="relative text-lg font-semibold text-white">        {isVisible ? <p className='text-red-500'>Hide All Posts </p> : <p className='text-green-500'>Show All Posts</p>}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TABLE */}
            {isVisible && (
                <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                            <th scope="col" className="text-sm font-lg text-purple-600 px-6 py-4 text-left">ID</th>
                            <th scope="col" className="text-sm font-lg text-purple-600 px-6 py-4 text-left">TITLE</th>
                            <th scope="col" className="text-sm font-lg text-purple-600 px-6 py-4 text-left ">BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts?.map((post) => (
                            <tr key={post.id} className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-md text-gray-900 w-16">{post.id}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-40">{post.title}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-80 overflow-hidden overflow-ellipsis">{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
