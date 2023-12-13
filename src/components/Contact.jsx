import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="container mx-auto md:my-20 my-10 md:px-48 px-3 text-white">
                <form onSubmit={handleSubmit}>
                    <div className="md:px-20">
                        <h1 className="md:text-5xl text-3xl font-semibold my-3">Contact Us</h1>
                        <div className="mb-5">
                            <label htmlFor="work" className="block">How Can We Work Together?</label>
                            <input type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Hows?" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="work" className="email">Bussiness Email?</label>
                            <input type="email" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Bussiness Email?" required />
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                            <div className="mb-5">
                                <label htmlFor="work" className="email">First Name?</label>
                                <input type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="First Name?" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="work" className="email">Last Name?</label>
                                <input type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Last Name?" required />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="work" className="email">Tell us more about your interest in working with Furi Diningrat</label>
                            <textarea type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Tell me please" required></textarea>
                        </div>

                        <button className="bg-purple rounded-full px-4 py-2 hover:bg-purple/90 w-full">
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact