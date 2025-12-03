import React from "react";
import styled from "styled-components";
import Form from "./Form.jsx";
import Capsule from "../Capsule/Capsule.jsx";
import SymbolOfExcellence from "../SymbolOfExcellence/SymbolOfExcellence.jsx";
const HelloWorldStyle = styled.div`
  background-color: green;
  .element {
    color: red;
  }
`;
const HelloWorld = () => {
  return (
    <div style={{display : "flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height: "100vh",width: "100vw"}}>
      <div><SymbolOfExcellence/></div>
      
      <Capsule/>
    </div>
  );
};

export default HelloWorld;
