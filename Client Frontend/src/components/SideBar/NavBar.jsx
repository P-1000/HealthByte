import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../utils/Button.jsx';
import Example from '../../utils/HeadlessUi/Pop.jsx';

const NavBar = (props) => { // Accept props as an argument
  // You can now access the props passed to NavBar
  
  return (
    <>
      <div className=' relative '>
        <div className='absolute inset-9 ml-[650px]'>
          <Button someProp="Donate Blood" />
          {/* <Example/>     */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
