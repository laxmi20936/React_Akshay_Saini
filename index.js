{/* <div id="parent">
    <div id="child">
        <h1>this is h1 Tag</h1>
    </div>
</div> */}

const heading = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"This is h1 Tag"),
                React.createElement("h2",{},"This is h2 Tag")] ))

console.log(heading); 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)