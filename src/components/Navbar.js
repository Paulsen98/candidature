import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar () {
    return (
        <nav>
            <ul className="nav-links">
                <li><Menu.Item key="1"><Link to="/">Home</Link></Menu.Item></li>
                <li><Menu.Item key="2"><Link to="/about">About</Link></Menu.Item></li>
                <li><Menu.Item key="3"><Link to="/users">Users</Link></Menu.Item></li>
            </ul>
        </nav>
    );
}

export default Navbar;