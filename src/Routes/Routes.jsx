import React from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import InstalledApp from '../pages/InstalledApp/InstalledApp';

import StatesSection from '../pages/StateSection/StateSection';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import Apps from '../pages/Apps/Apps';
import LoadingSpiner from '../components/LoadingSpiner/LoadingSpiner';










export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
index: true,
loader: () => fetch('app.json'),
path: '/',
Component: Home



      },

            {
                path: '/allapps',
                Component: AllApps
            },
            // {
            //     path: '/apps/:id',
            //     Component: AppDetails
            // },
            {
path: '/apps',
Component:Apps
},


{

path: '/apps/:id',
loader: () => fetch('./app.json'),
// loader: () => fetch('./booksData.json'),
Component: AppDetails



},


            {
                path: '/installed',
                loader: () => fetch('./app.json'),
                Component: InstalledApp
            },
            {
                path: '/state',
                Component: StatesSection
            },
            {
                path: '/loadin',
                Component: LoadingSpiner
            }




// {
// path: '/about',
// Component:About
// },

// {
// path: '/readList',
// Component:ReadList
// },

// {

// path: '/bookDetails/:id',
// loader: () => fetch('./booksData.json'),
// Component: BookDetails



// }



    ],

  },

]);