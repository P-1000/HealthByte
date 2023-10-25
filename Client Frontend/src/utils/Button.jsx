import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { someProp } = props; // Destructure props

    return (
        <>
        <button className="  bg-black/30 ">
                    {someProp}
                </button>
        
        </>
    );
};

export default NavBar;
