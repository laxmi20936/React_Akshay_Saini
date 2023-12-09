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
    <div className="flex justify-between bg-yellow-200 sm:bg-red-500 lg:bg-gray-200">
      <div className="logo-container w-40">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="m-4">
            Online status {onlineStatus ? "✔": "🔴"}
          </li>
          <li className="m-4"><Link to="/">Home</Link></li>
          <li className="m-4"><Link to="/about">About</Link></li>
          <li className="m-4"><Link to ="/contact">Contact</Link></li>
          <li className="m-4">Cart</li>
          {/* <button onClick={loginHandler}>{login}</button> */}

          {/* OR */}
          {loggedIn ? (
            <button onClick={() => setLoggedIn(false)}>Login</button>
          ) : (
            <button onClick={() => setLoggedIn(true)}>Logout</button>
          )}
          <Link to="/challenges"><li>Challenges</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
