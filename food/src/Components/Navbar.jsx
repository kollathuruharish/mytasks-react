import React from 'react';
import {
    BrowserRouter,
    Routes,
    Link,
    Route
} from "react-router-dom";
import { Fooditems } from './Fooditems';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
export const Navbar = () => {
    return <div>
        <BrowserRouter>
            <nav className="navbar navbar-light" style="background-color: #e3f2fd;">


                <Link to="/">Home</Link>


                <Link to="login">Login</Link>


                <Link to="register">Register</Link>


                <Link to="fooditems">Fooditems</Link>


                {/* <Link to="allUsers">All Users</Link> */}


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="fooditems" element={<Fooditems />} />
                </Routes>
            </nav>

        </BrowserRouter>,
    </div>;
};
