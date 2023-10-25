import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { someProp } = props; // Destructure props

    return (
        <>
        <h1>

                    {someProp}
        </h1>
        </>
    );
};

export default NavBar;
