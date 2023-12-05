import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
 
  componentDidMount(){
    console.log("pparent component did mount");
    this.timer = setInterval(()=>{
        console.log("parent mounted callled after 1s");
    },10)
  }

  componentDidUpdate(){
    console.log("Comp did update parent called")
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("parent unmounted");
  }

  render() {
    console.log("Parent render called");

    return (
      <div className="about">
        {console.log("Parent render inside called2")}
        <h1>About Us page</h1>
        {/* <User name={"LAXMI function"}/> */}
        <UserClass nameee={"First CLASS"} />
        {/* <UserClass nameee={"Second CLASS"} /> */}
      </div>
    );
  }
}

export default About;
