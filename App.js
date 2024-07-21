import React from 'react';
import ReactDOM from 'react-dom/client';


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
 * ReactElement is finally an Object and while it is renderingonto the DOM it converts as HTML which browser understands
 *
 */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
