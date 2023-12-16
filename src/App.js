import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Challenges from "./components/Challenges";
// import { userData } from "./utils/UserContext";
import { userData } from "./utils/UserContext";
const Contact = lazy(() => import("./components/Contact"));
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const App = () => {
  const [userData1, setUserData1] = useState(null);
  useEffect(() => {
    setUserData1({
      name: "",
      age: 899,
      height: "90cm",
    });
  }, []);

  return (
    <Provider store={appStore}>
      <userData.Provider
        value={{
          loggedUser: userData1,
          setUserData1,
        }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userData.Provider>
    </Provider>
  );
};

export const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/challenges",
        element: <Challenges />,
      },
    ],
  },
]);
