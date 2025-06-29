import React from 'react';
import {createBrowserRouter,} from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import ProjectDetails from '../Pages/ProjectDetails';
import Contact from '../Pages/Contact';

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
        },
        {
            path:'skills',
            Component:Skills,
        },
        {
            path:'education',
            Component:Education,
        },
        {
            path:'projects',
            Component:Projects,
        },
        {
            path:'/project/:id',
            Component:ProjectDetails,
        },
        {
            path:'contact',
            Component:Contact,
        }

    ]
  },
]);

export default router;