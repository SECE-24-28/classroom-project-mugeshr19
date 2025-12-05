import React from "react";
import styled from "styled-components";
import Form from "./Form.jsx";
import Capsule from "../Capsule/Capsule.jsx";
import SymbolOfExcellence from "../SymbolOfExcellence/SymbolOfExcellence.jsx";
import VisonMission from "../SymbolOfExcellence/VisionMission.jsx";
import ImpactAtAGlance from "../ImpactAtGlace/ImpactAtAGlance.jsx";
const HelloWorldStyle = styled.div`
gap: 60px;
  @media (max-width: 768px) {
    gap: 180px;
  }
`;
const HelloWorld = () => {
  return (
    <HelloWorldStyle style={{display : "flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",overflowY:"hidden",overflowX: "hidden"}}>
      <div><SymbolOfExcellence/></div>
      <div><VisonMission/></div>
      <Capsule/>
      <div><ImpactAtAGlance/></div>
    </HelloWorldStyle>
  );
};

export default HelloWorld;