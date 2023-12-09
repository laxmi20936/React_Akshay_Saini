import {lazy , Suspense} from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Challenges from "./components/Challenges";
const  Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

export const appLayout = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement :<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Suspense><Contact/></Suspense>
      },
      {
        path:"/restaurant/:resID",
        element:<RestaurantMenu/>
      },
      {
        path:"/challenges",
        element:<Challenges/>
      }
    ]
  }
])

