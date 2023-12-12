import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <>

            <div className="bg-dark2 w-full p-3 py-5 text-white text-center">
                <div className="flex justify-center pb-2">
                    <ul className="text-lg font-semibold transition-all duration-300 text-white flex">
                        <li className="cursor-pointer hover:text-purple px-2 pb-2">Blog</li>
                        <li className="cursor-pointer hover:text-purple px-2 pb-2">Team</li>
                        <li className="cursor-pointer hover:text-purple px-2 pb-2">Jobs</li>
                    </ul>
                </div>
                <div className="flex justify-center gap-2 mb-2">
                    <FontAwesomeIcon icon={faPaperPlane} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-sm rounded-full p-[5px]" />
                    <FontAwesomeIcon icon={faTwitter} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-sm rounded-full p-[5px]" />
                    <FontAwesomeIcon icon={faDiscord} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-sm rounded-full p-[5px]" />
                </div>
                <span className="text-sm">© 2023 Furi Diningrat</span>
            </div>
        </>
    )
}

export default Footer