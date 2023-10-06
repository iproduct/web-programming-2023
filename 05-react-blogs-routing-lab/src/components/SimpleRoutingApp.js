import './SimpleRoutingApp.css';
import {NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <nav>
                    <NavLink to="/" className={({ isActive }) =>
                        "navlink " + (isActive ? "active" : "")
                    }>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive, isPending }) =>
                        "navlink " + (isActive ? "active" : "")
                    }>
                        About Us
                    </NavLink>
                    <NavLink to="/posts" className={({ isActive, isPending }) =>
                        "navlink " + (isActive ? "active" : "")
                    }>
                        Posts
                    </NavLink>
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
                    <NavLink to="/" className={({ isActive }) =>
                        "navlink " + (isActive ? "active" : "")
                    }>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive, isPending }) =>
                        "navlink " + (isActive ? "active" : "")
                    }>
                        About Us
                    </NavLink>
                    <NavLink to="/posts" className={({ isActive, isPending }) =>
                        "navlink " + (isActive ? "active" : "")
                    }>
                        Posts
                    </NavLink>
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
                    <NavLink to="/" className={({ isActive }) =>
                        "navlink " + (isActive ? "active" : "")
                    }>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive, isPending }) =>
                        "navlink " + (isActive ? "active" : "")
                    }>
                        About Us
                    </NavLink>
                    <NavLink to="/posts" className={({ isActive, isPending }) =>
                        "navlink " + (isActive ? "active" : "")
                    }>
                        Posts
                    </NavLink>
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

