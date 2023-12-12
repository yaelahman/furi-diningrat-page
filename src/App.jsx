import "./assets/fonts/PoplarStd.otf"
import "./assets/style/App.css"
import headerPng from "./assets/img/header.png"
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Route";
import Layout from "./components/Layout/Index";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  index={route.index}
                  element={<route.main />}
                />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>

  )
}

export default App