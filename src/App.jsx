import "./assets/fonts/PoplarStd.otf"
import "./assets/style/App.css"
import Navbar from "./components/Navbar"
import headerPng from "./assets/img/header.png"
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

const App = () => {

  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
    } else if (y < window.scrollY) {
      console.log("scrolling down");
    }
    setY(window.scrollY);
    console.log(window.scrollY)
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);

  return (
    <div className="relative">
      <img src={headerPng} alt="" className="absolute opacity-50 h-50 w-full" />
      <Navbar scroll={y} />
      <div className="container mx-auto mt-10 px-3 text-white min-h-[1000px]">
        <div className="mb-5">
          <h1 className="font-poppins text-5xl font-bold text-purple tracking-tight text-center mb-2">FURI DININGRAT</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam aliquam nulla at nisi earum voluptatem quis pariatur ipsum praesentium. Incidunt amet ipsa aliquam modi voluptatum non eveniet numquam, maiores excepturi tenetur voluptatem quod, pariatur culpa illum corporis dolorem expedita commodi itaque saepe harum repellendus. Cumque perspiciatis non alias magnam, eaque delectus et ut hic! Explicabo ducimus accusantium eum, voluptatibus sequi sint harum earum enim dolores accusamus consectetur soluta rem libero nostrum? Quae, nemo maiores similique voluptatibus saepe optio ad quos accusantium, quo quam sapiente consequatur neque blanditiis provident quaerat? Aut vel similique aliquid ea, eum harum molestias dolorem possimus.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App