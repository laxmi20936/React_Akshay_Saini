import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"This is h1111111112222 Tag"),
                React.createElement("h2",{},"This is h2 Tag")] ))

console.log(heading); 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)