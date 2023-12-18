import { useLocation, useParams } from "react-router-dom"

import blogs from "../data/blog.json"
import { useEffect } from "react"

const BlogDetail = () => {
    const location = useLocation()
    const params = useParams()

    let blog = blogs.filter((row) => row.slug == params.slug)
    if (blog.length > 0) blog = blog[0]

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