import { useContext } from "react";
// import { userData } from "../utils/UserContext"
import { userData } from "../utils/UserContext";


const Contact = () => {
    const {loggedUser} = useContext(userData)
    return(
        <div className="contact">
            <h1>Contact Us page</h1>
            <div>{loggedUser?.name + " " + loggedUser?.age}AB</div>
        </div>
    )
}

export default Contact