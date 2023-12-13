import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import headerPng from "../assets/img/header.png"
import header2Png from "../assets/img/header2.png"
import { faCheckSquare, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link, useOutletContext } from "react-router-dom"
import svg1 from "../assets/svg/1.svg"
import { useRef } from "react"

import stakeJson from "../data/stake.json"
import blogJson from "../data/blog.json"

const Home = () => {
    let stakeData = stakeJson
    let blogData = blogJson.filter((row, index) => index < 3)

    return (
        <>
            <img src={headerPng} alt="" className="absolute opacity-30 top-0 h-50 w-full ml-auto" />
            <div id="home" className="container mx-auto md:mt-28 mt-20 px-6 text-white min-h-[1000px]">
                <div className="mb-8 relative">
                    <div className="mb-5">
                        <div className="relative flex">
                            <h1 className="absolute top-[3px] left-[3px] font-poppins md:text-8xl text-5xl font-bold text-white tracking-tight text-left mb-2 whitespace-nowrap">FURI DININGRAT</h1>
                            <h1 className="font-poppins md:text-8xl text-5xl font-bold text-purple tracking-tight text-left mb-2">FURI DININGRAT</h1>
                        </div>
                        <p className="font-semibold text-2xl tracking-widest my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iure!</p>
                    </div>

                    <div className="flex md:justify-start justify-center gap-5 mb-2">
                        <FontAwesomeIcon icon={faPaperPlane} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-3xl rounded-full border p-[12px]" />
                        <FontAwesomeIcon icon={faTwitter} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-3xl rounded-full border p-[12px]" />
                        <FontAwesomeIcon icon={faDiscord} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-3xl rounded-full border p-[12px]" />
                    </div>
                </div>
                <div className="my-48 text-white relative">
                    <img src={header2Png} alt="" className="absolute opacity-30 right-[-60px] h-50 w-72 ml-auto" />
                    <div className="text-center mb-14 md:px-52 px-3">
                        <h3 className="md:text-5xl text-3xl font-semibold ">Our Expertise</h3>
                        <p className="text-lg">A blockchain development firm, lab, and validator, that builds software to supercharge the growth and security of the Interchain.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        <ExpertiseCard />
                        <ExpertiseCard />
                        <ExpertiseCard />
                    </div>
                </div>
                <div id="blog" className="my-48 text-white">
                    <h3 className="text-center md:text-5xl text-3xl font-semibold mb-14">Blog</h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {blogData.map((row, index) => {
                            return (
                                <BlogCard key={index} blog={row} />
                            )
                        })}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link to="/blog">
                            <button className="transition-all duration-300 bg-dark hover:bg-purple/20 hover:border-purple/30 hover:text-purple border px-5 py-2 rounded-full">Show More</button>
                        </Link>
                    </div>
                </div>
                <div id="stake" className="my-48 text-white">
                    <h3 className="text-center md:text-5xl text-3xl font-semibold mb-14">Stake</h3>
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
                        {stakeData.map((row, index) => {
                            return (
                                <StakeCard key={index} title={row.title} image={row.image} link={row.link} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

const ExpertiseCard = () => {
    return (
        <div className="backdrop-filter backdrop-blur-lg bg-dark2 bg-opacity-10 text-center border border-dark2 rounded-3xl py-5 px-5">
            <img src={svg1} className="text-purple fill-purple mx-auto py-5" alt="" />
            <h6 className="text-2xl font-semibold">FURI LAB</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis?</p>
        </div>
    )
}

const BlogCard = ({ ...data }) => {
    const [y, setY] = useOutletContext()
    return (
        <Link to={"/blog/" + data.blog.slug}>
            <div key={data.key} className="mb-5 w-full cursor-pointer">
                <div className={"transition-all duration-300 hover:text-purple " + (y > 800 ? 'scale-100' : 'scale-0')}>
                    <div className="transition-all duration-300 hover:bg-purple/5 min-h-52 rounded-lg border mb-2">
                        <img src={data.blog.image} className="min-h-52 w-full rounded-lg" alt="" />
                    </div>
                    <h6 className="text-2xl">{data.blog.title}</h6>
                </div>
                <span>{data.blog.created_at}</span>
            </div>
        </Link>
    )
}

const StakeCard = ({ ...data }) => {
    const [y, setY] = useOutletContext()

    return (
        <div key={data.key} className={"transition-all duration-300 mb-3 text-center border rounded-tr-2xl rounded-bl-2xl border-gray-700 " + (y > 1400 ? 'scale-100' : 'scale-0')}>
            <img src={data.image} className="mx-auto py-5" alt="" />
            <div className="bg-dark2 rounded-bl-2xl pb-5 pt-2 border-t border-gray-700">
                <h6 className="text-lg mb-1">{data.title}</h6>
                <a href={data.link} target="_blank" className="transition-all duration-300 bg-dark border border-transparent btn-dark shadow-md text-sm rounded-full px-5 py-1 hover:shadow-purple hover:border-purple">Delegate</a>
            </div>
        </div>
    )
}

export default Home