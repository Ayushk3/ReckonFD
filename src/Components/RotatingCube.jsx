import React from "react";
import "./RotatingCube.scss";
import { FaUserDoctor } from "react-icons/fa6";
import { GiFirstAidKit } from "react-icons/gi";
import { FaMosquito } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";

function RotatingCube() {
  return (
    <div >
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
          <FaUserDoctor color="red"/>
          </div>
          <div className="face2">
            <FaMosquito />
          </div>
          <div className="face3">
            <GiFirstAidKit />
          </div>
          <div className="face4">
            <FaLocationDot />
          </div>
          <div className="face5">
            <FaHandHoldingMedical />
          </div>
          <div className="face6">
          <FaHospitalAlt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RotatingCube;