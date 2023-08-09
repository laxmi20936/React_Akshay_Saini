import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import "./index.css"

const heading = React.createElement("div",{className:"title"},
[React.createElement("h1",{},"this is h1 tag"),
React.createElement("h2",{}, "this is h2 tag"),
React.createElement("h3",{},"this is h3 tag")])
console.log(heading); 

const jsxHead = (<div className='ok'>
                    <h1>this is JSX h1</h1>
                    <h2>this is JSX h2</h2>
                    <h3>this is JSX h3</h3>
</div>)

function Title (){
    return <div>I am Title</div>
}

const JsxFuctionalHead = () => (<div className='abc'>
    <h1>this is Functional JSX h1</h1>
    <h2>this is Functional JSX h2</h2>
    <h3>this is  Functional JSX h3</h3>
    <Title/>
</div>)

console.log(JsxFuctionalHead())


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

