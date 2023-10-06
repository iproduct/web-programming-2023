import MainPage from './MainPage';
import PostDetails from './PostDetails';
import PostsList from './PostsList';
import PostsPage from './PostsPage';
import './SimpleRoutingApp.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        children: [{
            index: true,
            element: (<h1>Home</h1>)
        },
        {
            path: "posts",
            element: <PostsPage />,
            children: [{
                path:":postId",
                element: <PostDetails />
            }],
        },
        {
            path: "about",
            element: (<h1>About</h1>)
        },
        ]
    }]);

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}

