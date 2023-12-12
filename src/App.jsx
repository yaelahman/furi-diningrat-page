import "./assets/style/App.css"
import Navbar from "./components/Navbar"
import headerPng from "./assets/img/header.png"

const App = () => {
  return (
    <div className="relative">
      <img src={headerPng} alt="" className="absolute opacity-50 h-50 w-full" />
      <Navbar />
      <div className="container mx-auto">
      </div>
    </div>
  )
}

export default App