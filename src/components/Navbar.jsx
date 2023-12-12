const Navbar = () => {
    return (
        <>
            <div className="border-b border-gray-500 py-5 backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-10">
                <div className="container mx-auto px-3">
                    <div className="flex text-white justify-between">
                        <h6 className="my-auto text-2xl fw-semibold">FURI DININGRAT</h6>
                        <div className="flex gap-6">
                            <ul className="hidden lg:flex gap-3 my-auto">
                                <li>Our Expertise</li>
                                <li>What We're Building</li>
                                <li>Blog</li>
                                <li>Team</li>
                                <li>Jobs</li>
                            </ul>
                            <button className="bg-purple rounded-full px-4 py-2 hover:bg-purple/90">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar