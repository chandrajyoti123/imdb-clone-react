import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './view/Home/Home';
import Popular from './view/Popular/Popular';
import UpComing from './view/UpComing/UpComing';
import TopRated from './view/TopRated/TopRated';
import DetailedPage from './view/DetailedPage/DetailedPage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/popular",
        element:<Popular/>
    },
    {
        path:"/toprated",
        element:<TopRated/>
    },
    {
        path:"/upcoming",
        element:<UpComing/>
    },
    {
        path:"/detailed/:id",
        element:<DetailedPage/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<RouterProvider router={router}/>

);


