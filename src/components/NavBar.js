import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = ({currentUser}) => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <span> </span>
            <NavLink to='/products'>Product Index</NavLink>
            <span> </span>
            {
                currentUser ? (
                    <>
                        <NavLink to='/products/new'>Create New Product</NavLink>
                        <span> </span>
                        <span>Welcome, {currentUser.first_name}</span>
                    </>
                ) : (
                    <>
                        <NavLink to='/sign_in'>Sign In</NavLink>
                    </>
                )
            }
            
        </nav>
    )
}

export default NavBar;