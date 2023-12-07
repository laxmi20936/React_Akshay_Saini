import { LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  // console.log("Header called");
  const [login, setLogin] = useState("Login");
  const [loggedIn, setLoggedIn] = useState(true);
  
  const onlineStatus = useOnline()
  // console.log("Header called2");

  const loginHandler = () => {
    //    if(login === "Login"){
    //       setLogin("Logout")
    //    }else{
    //     setLogin("Login")
    //    }
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };
  
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online status {onlineStatus ? "✔": "🔴"}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
          <li>Cart</li>
          {/* <button onClick={loginHandler}>{login}</button> */}

          {/* OR */}
          {loggedIn ? (
            <button onClick={() => setLoggedIn(false)}>Login</button>
          ) : (
            <button onClick={() => setLoggedIn(true)}>Logout</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
