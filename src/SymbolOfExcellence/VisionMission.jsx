import React from "react";
import styled from "styled-components";
const Wrapper=styled.div`
    height: 30vh;
    width: 90vw;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    @media(max-width:768px){
        flex-direction: column;
    } 
    @media(max-width:500px){
        gap: 80px;
    }
`;
const Visiondiv=styled.div`
    height: 30vh;
    width: 70vw;
    display: flex;
    flex-direction:column;
    align-items: start;
    justify-content:center;
    gap: 20px;
    border-right: 3px solid lightgrey;
    padding-left: 20px;
    
    @media(max-width:768px){
        border: none !important;
    } 
`;

const Visionpar=styled.div`
    font-size: 20px;
`;

const Missiondiv=styled.div`
    height: 30vh;
    width: 70vw;
    display: flex;
    flex-direction:column;
    align-items: start;
    justify-content:center;
    gap: 20px;
    padding-left: 20px;
`;

const Missionpar=styled.div`
    font-size: 20px;
`;
const VisonMission=()=>{
    return(
        <>
        <Wrapper>
            <Visiondiv>
                <div style={{fontFamily:"Work-Sans,sans-serif",borderLeft:"5px solid orange",paddingLeft:"10px",color:"orange"}}>
                    <h1>Our Vision</h1>
                </div>
                <Visionpar style={{lineHeight: "1.5",ontFamily:"Work-Sans,sans-serif",color:"grey"}}>
                    Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.
                </Visionpar>
            </Visiondiv>
            <Missiondiv>
                <div style={{fontFamily:"Work-Sans,sans-serif",borderLeft:"5px solid deepskyblue",paddingLeft:"10px",color:"deepskyblue"}}>
                    <h1>Our Mission</h1>
                </div>
                <Missionpar style={{lineHeight: "1.5",ontFamily:"Work-Sans,sans-serif",color:"grey"}}>
                    Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development. We foster a culture of inclusivity and personal growth.
                </Missionpar>
            </Missiondiv>
        </Wrapper>
        </>
    );
}

export default VisonMission;