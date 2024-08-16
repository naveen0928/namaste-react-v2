import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorElement from "./components/ErrorElement";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartList from "./components/CartList";
// import Grocery from "./components/Grocery";

// Hello world from react
// {} is the place where you give attributes to your tags

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!!"
// );

// Example
/**
 *
 * <div id="parent">
 *     <div id="child">
 *         <h1>I am an h1 tag</h1>
 *         <h2>I am an h2 tag</h2>
 *     </div>
 *     <div id="child">
 *         <h1>I am an h1 tag</h1>
 *         <h2>I am an h2 tag</h2>
 *     </div>
 * </div>
 *
 * ReactElement is finally an Object and while it is rendering onto the DOM it converts as HTML which browser understands
 *
 */

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
// ]);

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Naveen Mandapati",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "React v2" }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <CartList />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
