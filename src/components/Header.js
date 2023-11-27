import {LOGO} from '../utils/constants'

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img src={LOGO}
                alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header