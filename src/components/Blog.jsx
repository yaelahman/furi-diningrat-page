import { Link } from "react-router-dom"

const Blog = () => {
    return (
        <>
            <div className="container mx-auto md:my-20 my-10 md:px-48 px-3 text-white">
                <div className="mb-20">
                    <h1 className="md:text-5xl text-3xl font-semibold my-3">Latest News</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="transition-all duration-300  h-52 rounded-lg border border-dark2 mb-2">
                            {/* <img src="" className="h-50 w-50" alt="" /> */}
                        </div>
                        <div>
                            <h6 className="text-2xl text-purple font-semibold mb-3">Local-Interchain: Launch Private Testnets for Rapid Development</h6>
                            <p className="text-sm">Local-Interchain is a local testnet platform written for Inter-Blockchain Communication (IBC) contracts and protocols. It leverages Strangelove’s interchaintest to easily configure and interact with chains in a language-agnostic way. This helps developers stand up multi-chain environments with smart contracts and connect them seamlessly via IBC.</p>
                            <div className="flex my-5 text-neutral-300">
                                <span className="border-r border-neutral-300 pr-3">Nov 28, 2023</span>
                                <span className="pl-3">8 min read</span>
                            </div>
                            <button className="transition-all duration-300 bg-dark hover:bg-purple/20 hover:border-purple/30 hover:text-purple border px-5 py-2 rounded-full">Show More</button>
                        </div>
                    </div>
                </div>
                <div className="mb-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </div>
        </>
    )
}

const BlogCard = () => {
    return (
        <div className={"transition-all duration-300 mb-3 text-left border rounded-tr-2xl rounded-bl-2xl border-gray-700 "}>
            <img src="https://raw.githubusercontent.com/kj89/cosmos-images/main/logos/agoric.png" className="mx-auto py-5" alt="" />
            <div className="bg-dark2 rounded-bl-2xl pb-5 pt-2 border-t border-gray-700 px-3">
                <h6 className="text-lg mb-1">Bagaimana Cara Membeli Mobile Legends</h6>
                <p className="text-neutral-300 text-sm mb-3">
                    08 Agustus 2023
                </p>
                <Link to={"/blog/slug"}>
                    <button className="transition-all duration-300 bg-dark border border-transparent btn-dark shadow-md text-sm rounded-full px-5 py-1 hover:shadow-purple hover:border-purple">Show</button>
                </Link>
            </div>
        </div>
    )
}
export default Blog