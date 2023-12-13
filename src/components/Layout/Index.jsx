import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Layout = () => {

    const [y, setY] = useState(0);

    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
        } else if (y < window.scrollY) {
        }
        setY(window.scrollY);
    };

    useEffect(() => {
        setY(window.scrollY);

        window.addEventListener("scroll", (e) => handleNavigation(e));
    }, []);
    return (
        <>
            <div className="relative overflow-hidden">
                <Navbar scroll={y} />
                <Outlet context={[y, setY]} />
                <Footer />
                <Link
                    to="root"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                >
                    <div className={"transition-all duration-300 bottom-10 right-10 fixed " + (y > 124 ? 'scale-10' : 'scale-0')}>
                        <button className="transition-all duration-300 shadow shadow-white text-white bg-dark rounded-full px-3 py-1 hover:text-purple active:animate-bounce">
                            <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Layout