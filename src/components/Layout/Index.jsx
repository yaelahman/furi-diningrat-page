import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";

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
            <div className="relative">
                <Navbar scroll={y} />
                <Outlet context={[y, setY]} />
                <Footer />
            </div>
        </>
    )
}

export default Layout