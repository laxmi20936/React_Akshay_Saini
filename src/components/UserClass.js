import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCount: 0,
      count2: 3,
      userName:{
        name:"laxmiiii",
        location:"bhandup"
      }
    };

    console.log(props.nameee + " Child constructor");
  }

  async componentDidMount(){
    console.log(this.props.nameee + " child component did mount")

    const data = await fetch("https://api.github.com/users/akshaymarch7")
    const json = await data.json()
    console.log(json);
    this.setState({
      userName:json
    })

  }

  componentDidUpdate(){
    console.log("Comp did update child called")
  }

  componentWillUnmount(){
    console.log(this.props.nameee + " child unmounted");
  }

  render() {
    // const { nameee } = this.props;
    const { dataCount, count2 } = this.state;
    console.log(this.props.nameee + " Child render");

    return (
      <div className="user">
        {/* {console.log("child render inside")} */}
        <h1>{this.state.dataCount}</h1>
        <h1>{count2}</h1>
        <button onClick={() => this.setState({ count2: count2 + 3 })}>
          Click
        </button>
        <h1>name: {this.state.userName.name}</h1>
        <h1>location: {this.state.userName.location}</h1>
      </div>
    );
  }
}

export default UserClass;
