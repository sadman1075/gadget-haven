import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Root from './Components/Root/Root.jsx';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails.jsx';
import Gadgets from './Components/Gadgets/Gadgets.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../Categories.json"),

        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>

          },
          {
            path: "/category/:category",
            element: <Gadgets></Gadgets>

          }
        ]

      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/Gadgets.json")
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/Gadgets.json")
      },
      {
        path: "/gadget-details/:gadgetId",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/Gadgets.json")
      }, {
        path: "/about",
        element: <AboutUs></AboutUs>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </HelmetProvider>
  </StrictMode>,
)
