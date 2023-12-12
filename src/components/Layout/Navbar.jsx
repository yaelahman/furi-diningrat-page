import { faBars, faClose, faPaperPlane, faPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { faDiscord, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Navbar = ({ scroll }) => {
    const [nav, setNav] = useState(false)
    return (
        <>
            <div className={"transition-all duration-300 border-b py-5 sticky top-0 z-50 backdrop-filter backdrop-blur-lg " + (scroll > 124 ? 'bg-dark mx-2 md:mx-8 top-2 border rounded-full border-gray-500 py-[7px]' : ' bg-dark bg-opacity-20 border-gray-500')}>
                <div className="container mx-auto">
                    <div className="flex text-white justify-between">
                        <h6 className={"my-auto lg:text-2xl text-xl font-semibold font-poppi rounded-full px-5 py-1 tracking-tight " + (scroll > 124 ? 'text-purple' : 'text-white')}>FURI DININGRAT</h6>
                        <div className="hidden lg:flex gap-6 px-2">
                            <ul className="flex gap-4 my-auto text-sm font-semibold">
                                <li className="transition-all duration-300 cursor-pointer hover:text-purple px-2">Blog</li>
                                <li className="transition-all duration-300 cursor-pointer hover:text-purple px-2">Stake</li>
                                <li className="transition-all duration-300 cursor-pointer hover:text-purple px-2">Jobs</li>
                            </ul>
                            <button className="bg-purple rounded-full px-4 py-2 hover:bg-purple/90">
                                Contact Us
                            </button>
                        </div>
                        <button className="hover:text-purple text-2xl lg:hidden px-5" onClick={() => setNav(true)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </div >
            <div className={"transition-all duration-150 ease-in-out fixed z-50 bg-dark h-[100vh] w-[300px] top-0 shadow-sm shadow-white " + (nav ? 'right-0' : 'right-[-300px]')}>
                <div className="flex justify-end p-5">
                    <button className="hover:text-purple text-white text-2xl" onClick={() => setNav(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className="flex justify-end p-5 pb-0">
                    <ul className="text-lg font-semibold transition-all duration-300 text-white">
                        <li className="cursor-pointer hover:text-purple px-2 pb-2">Blog</li>
                        <li className="cursor-pointer hover:text-purple px-2 pb-2">Stake</li>
                        <li className="cursor-pointer hover:text-purple px-2 pb-2">Jobs</li>
                    </ul>
                </div>
                <div className="flex justify-end p-5 pt-0">
                    <button className="bg-purple rounded-full px-4 py-2 hover:bg-purple/90 text-white">
                        Contact Us
                    </button>
                </div>
                <div className="absolute bottom-0 bg-dark2 w-full p-3 text-white text-center">

                    <div className="flex justify-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faPaperPlane} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-sm rounded-full p-[5px]" />
                        <FontAwesomeIcon icon={faTwitter} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-sm rounded-full p-[5px]" />
                        <FontAwesomeIcon icon={faDiscord} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-sm rounded-full p-[5px]" />
                    </div>
                    <span className="text-sm">© 2023 Furi Diningrat</span>
                </div>
            </div >

        </>
    )
}

export default Navbar