Class Components:

functional comp is a normal Js func which returns some piece of JSX.

Class component is a class that extends React.Component which has render() method 
which returns some piece of JSX.

React.Component is a class.

When we create a instance of a class then constructor method is called.

I am loading a class based component onto a web page means I am creating an instance 
of a class and when creating an instance constructor function is called.
And constructor is the best place to receive props and to create a state

loaded means mounting

constructor()
render()
componentDidMount()

When the component is mounted, comp is mounted is 2 phases:
Render phase 
Commit phase


Parent constructor
parent render
    First Child constructor
    First Child render

    Second Child constructor
    Child render 

    <DOM updated in single batch/>(Batch the render phase  )

    First componentDidMount
    Second componentDidMount(Batch the commit phase)
Parent componentDidMount