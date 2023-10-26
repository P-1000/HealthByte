import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../utils/Button.jsx';
import Example from '../../utils/HeadlessUi/Pop.jsx';
import { useLocation } from "react-router-dom";

const NavBar = (props) => { // Accept props as an argument
  // You can now access the props passed to NavBar
  const location = useLocation();
 const  ishome = location.pathname === "/home" ? true : false;
  
  return (
    <>
      <div className=' relative '>
        <div className='absolute inset-9 ml-[650px]'>
         {
            ishome ? <Button someProp="Donate Blood" /> : <></>
         }
          {/* <Example/>     */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
