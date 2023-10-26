import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Condition = (props) => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate('/' + path);
  }
  const { name } = props;
  const { imgsrc } = props;
  return (
 <Link to={`/${name}`} >
    <div onClick={handleNavigation(`${name.split(" ").join("")}`)}>
      <div className="border flex w-64 h-24 rounded-xl hover:shadow-md hover:cursor-pointer items-center">
        <div className="bg-gray-200  ml-2 justify-center  items-center rounded-lg flex w-32 h-20">
          <img className="w-12 h-12 " src={imgsrc} alt="" />
        </div>
        <div className="flex w-[100%] justify-center ">
          <h1 className="  font-medium ">{name}</h1>
        </div>
      </div>
    </div>
 </Link>
  );
};

export default Condition;
