import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '../../utils/Button.jsx';
import Example from '../../utils/HeadlessUi/Pop.jsx';

const NavBar = (props) => { // Accept props as an argument
  // You can now access the props passed to NavBar
  
  return (
    <>
      <div>
        <div>
          {/* You can use the props here */}

          {/* <Button someProp="bala" />
          <Button someProp="bala" />
            <Button someProp="bala" />
            <Button someProp="bala" />
          <Example/>     */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
