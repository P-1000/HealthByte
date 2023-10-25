import React from "react";
import Condition from "../../utils/Condition";
import heart from "../../assets/heart1.png";
import diabetes from "../../assets/treatment.png";
import stomach from "../../assets/stomach.png";
import cold from "../../assets/sneezing.png";
import musclepain from "../../assets/svg.png";
import eyecare from "../../assets/eye.png";
import livercare from "../../assets/liver.png";
import lungcare from "../../assets/lungs.png";
import covidcare from "../../assets/covid-19.png";
import eldercare from "../../assets/couple.png";

const BrowseByCon = () => {
  return (
    <div>
        <h1 className="mt-12 ml-5 text-2xl ">Browse By Health Conditaion</h1>
      <div className="flex  mt-5 flex-col gap-5">
        <div className="flex gap-5">
          <Condition name={"Diabetes Care"} imgsrc={diabetes} />
          <Condition name={"cardiac"} imgsrc={heart} />
          <Condition name={"Stomach Care"} imgsrc={stomach} />
          <Condition name={"Cold & Cough"} imgsrc={cold} />
          <Condition name={"Muscle & Joint Pain"} imgsrc={musclepain} />
        </div>
        <div className="flex gap-5">
          <Condition name={"Eye Care"} imgsrc={eyecare} />
          <Condition name={"Liver Care"} imgsrc={livercare} />
          <Condition name={"Lung Care"} imgsrc={lungcare} />
          <Condition name={"Covid-19 Care"} imgsrc={covidcare} />
          <Condition name={"Elderly Care"} imgsrc={eldercare} />
        </div>
      </div>
    </div>
  );
};

export default BrowseByCon;
