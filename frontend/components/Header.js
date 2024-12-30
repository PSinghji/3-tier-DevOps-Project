import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <h1>User Management</h1>
        <nav>
            <Link to="/">Home</Link> | <Link to="/add-user">Add User</Link>
        </nav>
    </header>
);

export default Header;

