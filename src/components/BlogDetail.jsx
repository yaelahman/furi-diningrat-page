import { useLocation, useParams } from "react-router-dom"

import { useEffect, useState } from "react"
import { getBlogs } from "../data/blogs"

const BlogDetail = () => {
    const location = useLocation()
    const params = useParams()

    const [blog, setBlogs] = useState([])

    const getBlog = async () => {
        let response = await getBlogs()
        response = response.data.filter((row) => row.slug == params.slug)
        if (response.length > 0) response = response[0]
        setBlogs(response)
    }
    useEffect(() => {
        getBlog()
    }, [])


    return (
        <>
            <div className="container mx-auto md:my-20 my-10 md:px-48 px-3 text-white">
                <h1 className="md:text-3xl text-xl font-semibold my-3">{blog?.title}</h1>
                <div className="my-3 text-sm text-neutral-400">
                    <span className="tracking-tighter border-r pr-3">{blog?.created_at}</span>
                    <span className="tracking-tighter pl-3">{blog?.created_by}</span>
                </div>
                <img src={blog?.image} alt="" />
                <div className="my-4" dangerouslySetInnerHTML={{ __html: blog?.text }}>
                </div>
            </div>
        </>
    )
}

export default BlogDetail