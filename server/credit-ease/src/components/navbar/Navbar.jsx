import "./navbar.scss"
import SpeedIcon from '@mui/icons-material/Speed';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navContainer">
                <div className="logoContainer">
                    <SpeedIcon style={{ fontSize: 30 }} />
                    <span>Credit Ease</span>
                </div>
                <div className="pages">
                    <Link to="/"style={{ textDecoration: 'none' }}><span>Home</span></Link>
                    <Link to="/team"style={{ textDecoration: 'none' }}><span>Team</span></Link>
                    <Link to="/about"style={{ textDecoration: 'none' }}><span>About</span></Link>
                </div>
                <div className="button">
                    <span>Get Started</span>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;