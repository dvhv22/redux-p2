import './NaBar.css';
import { NavLink } from "react-router-dom";

const NaBar = () => {
    return (
        <div className="topnav">
            {/* <NavLink end to="/">Home</NavLink> */}
            <NavLink end to="/postlist">PostsList</NavLink>
            <NavLink end to="/addform">AddForm</NavLink>

        </div>
    )
}
export default NaBar;