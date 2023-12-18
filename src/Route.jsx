import Blog from "./components/Blog"
import BlogCreate from "./components/BlogCreate"
import BlogDetail from "./components/BlogDetail"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Job from "./components/Job"

const routes = [
    // Auth Routing
    { path: "/", main: () => <Home /> },
    { path: "/job", main: () => <Job /> },
    { path: "/blog", exact: true, main: () => <Blog /> },
    { path: "/blog/:slug", exact: true, main: () => <BlogDetail /> },
    { path: "/contact", main: () => <Contact /> },
    { path: "/blog-create", exact: true, main: () => <BlogCreate /> },
]

export { routes }