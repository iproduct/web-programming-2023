import './SimpleRoutingApp.css';
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <nav>
                    <Link className="navlink" to="/">Home</Link>
                    <Link className="navlink" to="/about">About Us</Link>
                    <Link className="navlink" to="/posts">Posts</Link>
                </nav>
                <h1>Home</h1>
                <h2>Hello React Router</h2>

            </div>
        )
    },
    {
        path: "/about",
        element: (
            <div>
                <nav>
                    <Link className="navlink" to="/">Home</Link>
                    <Link className="navlink" to="/about">About Us</Link>
                    <Link className="navlink" to="/posts">Posts</Link>
                </nav>
                <h1>About</h1>
            </div>
        )
    },
    {
        path: "/posts",
        element: (
            <div>
                <nav>
                    <Link className="navlink" to="/">Home</Link>
                    <Link className="navlink" to="/about">About Us</Link>
                    <Link className="navlink" to="/posts">Posts</Link>
                </nav>
                <h1>Posts</h1>
            </div>
        )
    },
]);

export default function SimpleRoutingApp() {
    return (
        <RouterProvider router={router} />
    )
}

