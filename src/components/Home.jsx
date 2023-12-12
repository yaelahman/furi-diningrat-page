import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import headerPng from "../assets/img/header.png"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useOutletContext } from "react-router-dom"

const Home = () => {
    return (
        <>
            <img src={headerPng} alt="" className="absolute opacity-30 top-0 h-36 w-full ml-auto" />
            <div className="container mx-auto mt-10 px-6 text-white min-h-[1000px]">
                <div className="mb-8">
                    <div className="mb-5">
                        <div className="relative flex">
                            <h1 className="absolute top-[3px] left-[3px] font-poppins md:text-8xl text-5xl font-bold text-white tracking-tight text-left mb-2">FURI DININGRAT</h1>
                            <h1 className="font-poppins md:text-8xl text-5xl font-bold text-purple tracking-tight text-left mb-2">FURI DININGRAT</h1>
                        </div>
                        <p className="font-semibold text-2xl tracking-widest my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iure!</p>
                    </div>

                    <div className="flex md:justify-start justify-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faPaperPlane} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-2xl rounded-full p-[5px]" />
                        <FontAwesomeIcon icon={faTwitter} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-2xl rounded-full p-[5px]" />
                        <FontAwesomeIcon icon={faDiscord} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-2xl rounded-full p-[5px]" />
                    </div>
                </div>
                <div className="my-48 text-white">
                    <h3 className="text-center md:text-5xl text-3xl font-semibold mb-14">Blog</h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="transition-all duration-300 bg-dark hover:bg-purple/20 hover:border-purple/30 hover:text-purple border px-5 py-2 rounded-full">Show More</button>
                    </div>
                </div>
                <div className="my-48 text-white">
                    <h3 className="text-center md:text-5xl text-3xl font-semibold mb-14">Stake</h3>
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-5">
                        <StakeCard />
                        <StakeCard />
                        <StakeCard />
                        <StakeCard />
                        <StakeCard />
                        <StakeCard />
                        <StakeCard />
                        <StakeCard />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="transition-all duration-300 bg-dark hover:bg-purple/20 hover:border-purple/30 hover:text-purple border px-5 py-2 rounded-full">Show More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const BlogCard = () => {
    const [y, setY] = useOutletContext()
    return (
        <div className="mb-5 w-full cursor-pointer">
            <div className={"transition-all duration-300 hover:text-purple " + (y > 200 ? 'scale-100' : 'scale-0')}>
                <div className="transition-all duration-300 hover:bg-purple/5 h-52 rounded-lg border mb-2">
                    {/* <img src="" className="h-50 w-50" alt="" /> */}
                </div>
                <h6 class="text-2xl">Bagaimana Cara Beli Mobile Legends?</h6>
            </div>
            <span>13 Desember 2023</span>
        </div>
    )
}

const StakeCard = () => {
    const [y, setY] = useOutletContext()
    return (
        <div className={"transition-all duration-300 mb-3 text-center border rounded-tr-2xl rounded-bl-2xl border-gray-700 " + (y > 800 ? 'scale-100' : 'scale-0')}>
            <img src="https://raw.githubusercontent.com/kj89/cosmos-images/main/logos/agoric.png" className="mx-auto py-5" alt="" />
            <div className="bg-purple/5 rounded-bl-2xl pb-5 pt-2 border-t border-gray-700">
                <h6 className="text-lg mb-1">Agoric</h6>
                <button className="transition-all duration-300 bg-dark border border-transparent btn-dark shadow-md text-sm rounded-full px-5 py-1 hover:shadow-purple hover:border-purple">Delegate</button>
            </div>
        </div>
    )
}

export default Home