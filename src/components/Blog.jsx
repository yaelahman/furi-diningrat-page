import { Link } from "react-router-dom"
import blogs from "../data/blog.json"

const Blog = () => {

    return (
        <>
            <div className="container mx-auto md:my-20 my-10 md:px-48 px-3 text-white">
                <div className="mb-20">
                    <h1 className="md:text-5xl text-3xl font-semibold my-3">Latest News</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="transition-all duration-300  h-52 rounded-lg border border-dark2 mb-2">
                            <img src={blogs[0].image} className="h-50 w-50" alt="" />
                        </div>
                        <div>
                            <h6 className="text-2xl text-purple font-semibold mb-3">{blogs[0].title}</h6>
                            <p className="text-sm">{blogs[0].short_text}</p>
                            <div className="flex my-5 text-neutral-300">
                                <span className="border-r border-neutral-300 pr-3">{blogs[0].created_at}</span>
                                <span className="pl-3">{blogs[0].created_by}</span>
                            </div>
                            <Link to={"/blog/" + blogs[0].slug}>
                                <button className="transition-all duration-300 bg-dark hover:bg-purple/20 hover:border-purple/30 hover:text-purple border px-5 py-2 rounded-full">Show More</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mb-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
                        {blogs.map((row, index) => {
                            return (
                                <BlogCard key={index} blog={row} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

const BlogCard = ({ ...data }) => {
    return (
        <div key={data.key} className={"transition-all duration-300 mb-3 text-left border rounded-tr-2xl rounded-bl-2xl border-gray-700 "}>
            <img src={data.blog.image} className="mx-auto py-5" alt="" />
            <div className="bg-dark2 rounded-bl-2xl pb-5 pt-2 border-t border-gray-700 px-3">
                <h6 className="text-lg mb-1">{data.blog.title}</h6>
                <p className="text-neutral-300 text-sm mb-3">
                    {data.blog.created_at}
                </p>
                <Link to={"/blog/" + data.blog.slug}>
                    <button className="transition-all duration-300 bg-dark border border-transparent btn-dark shadow-md text-sm rounded-full px-5 py-1 hover:shadow-purple hover:border-purple">Show</button>
                </Link>
            </div>
        </div >
    )
}
export default Blog