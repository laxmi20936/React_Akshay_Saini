import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1",{className:"head"},"I am React")
console.log(heading); 

const jsxHead = <h1>Namo Namo</h1>
console.log(jsxHead); 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHead)

