import React from "react";
import styled from "styled-components";

const TextContent = styled.div`
  h1 {
  font-size: 300%;
    @media (max-width: 768px) {
      font-size: 200%;
    }

    @media (max-width: 375px) {
      font-size: 100%;
    }
  }
    
`;
const SpecialDiv = styled.div`
        width:50vw;
        height:15rem;
        @media(max-width:768px){
            height:40rem;
        })
        @media(max-width:375px){
            height:40rem;
            width:70%;
        })
`;
const SymbolOfExcellence=()=>{
    return(
        <>
            <div style={{height:"20rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                <TextContent>
                <h1 style={{fontFamily:"Work-Sans,sans-serif",textAlign:"center",fontWeight:"bold"}}>A Symbol of Excellence in Placement Training</h1>
                </TextContent>
                <SpecialDiv style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"grey"}}>
                    <div style={{textAlign:"center",color:"black",fontFamily:"Work-Sans,sans-serif",display:"flex",alignItems:"center",lineHeight: "1.5",fontSize:"120%"}}>
                        Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven by personal experiences and a desire to make a difference, established the company with a mission to empower students with the right skills and mindset for success.
                    </div>
                    
                </SpecialDiv>
            </div>
        </>
    );
}   
export default SymbolOfExcellence;