import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    useParams,
    Link,
    Router
} from "react-router-dom";
import PostDetailComponent from './components/integratedComponents/postDetailLayout/PostDetailComponent';
import PostComponent from './components/integratedComponents/postLayout/PostComponent';


function RouterComponent() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <PostComponent />,
        },
        {
            path: ':id',
            element: <PostDetailComponent />
        }
    ]);

    return (

        <RouterProvider router={router} />
    )
}

export default RouterComponent