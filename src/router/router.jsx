import React from 'react';
import {createBrowserRouter,} from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import About from '../components/About';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:"about",
            Component:About,
        }
    ]
  },
]);

export default router;