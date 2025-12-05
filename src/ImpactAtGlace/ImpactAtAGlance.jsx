import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2vh;
    font-family : Work-Sans,sans-serif;
`;

const GlanceWrap=styled.div`
    gap: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Colstudents=styled.div`
    height: 12vh;
    width : 75vw;    
    gap:25px;   
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const MatTrainer=styled.div`
    height: 12vh;
    width : 75vw;  
    gap:25px;      
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Colleges=styled.div`
    position: relative;   
    height: 4vh;
    width : 32vw;
    font-size: 20px;
    background-color : rgb(255, 223, 228);
    padding: 4vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    .image{
        position: absolute;
        bottom: -30px;
        right: 20px;
        height: 120px;
        width: auto;
        object-fit: contain;
        z-index: 2;
    }

`;

const Students=styled.div`
    position: relative;   
    height: 4vh;
    width : 32vw;
    font-size: 20px;
    background-color : rgb(226, 240, 250);
    padding: 4vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    .image{
        position: absolute;
        bottom: -30px;
        right: 20px;
        height: 120px;
        width: auto;
        object-fit: contain;
        z-index: 2;
    }

`;

const Material=styled.div`
    position: relative;   
    height: 4vh;
    width : 32vw;
    font-size: 20px;
    background-color : rgb(222, 255, 236);
    padding: 4vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    .image{
        position: absolute;
        bottom: -30px;
        right: 20px;
        height: 120px;
        width: auto;
        object-fit: contain;
        z-index: 2;
    }

`;

const Trainers =styled.div`
    position: relative;   
    height: 4vh;
    width : 32vw;
    font-size: 20px;
    background-color : rgb(255, 230, 199);
    padding: 4vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    .image{
        position: absolute;
        bottom: -30px;
        right: 20px;
        height: 120px;
        width: auto;
        object-fit: contain;
        z-index: 2;
    }

`; 

const ImpactAtAGlance=()=>{
    return(
        <>
            <Wrapper>
                <div>
                    <h1>Impact at a <span style={{color:"rgb(252, 41, 71)"}}>Glance</span></h1>
                </div>
                <GlanceWrap>
                    <Colstudents>
                        <Colleges>
                            <div style={{fontWeight:"bold",display:"flex",flexDirection:"column",height:"4rem",width:"80px",gap:"10px"}}>
                                <span style={{color:"rgb(51, 65, 85)"}}>Colleges</span>
                                <h2>100+</h2>
                            </div>
                            <img src="	https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="colleges" className="image"/>
                        </Colleges>
                        <Students>
                            <div style={{fontWeight:"bold",display:"flex",flexDirection:"column",height:"4rem",width:"80px",gap:"10px"}}>
                                <span style={{color:"rgb(51, 65, 85)"}}>Students</span> 
                                <h2>1,00,000+</h2>
                            </div>
                            <img src="	https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="student" className="image"/>
                        </Students>
                    </Colstudents>
                    <MatTrainer>
                        <Material>
                            <div style={{fontWeight:"bold",display:"flex",flexDirection:"column",height:"4rem",width:"300px",gap:"10px"}}>
                                <span style={{color:"rgb(51, 65, 85)"}}>Study Materials</span> 
                                <h2>1000+</h2>
                            </div>
                            <img src="	https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="student" className="image"/>
                        </Material>
                        <Trainers>
                            <div style={{fontWeight:"bold",display:"flex",flexDirection:"column",height:"4rem",width:"300px",gap:"10px"}}>
                                <span style={{color:"rgb(51, 65, 85)"}}>Professional Trainers</span> 
                                <h2>150</h2>
                            </div>
                            <img src="	https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="student" className="image"/>
                        </Trainers>
                    </MatTrainer>
                </GlanceWrap>
            </Wrapper>
        </>
    );
}

export default ImpactAtAGlance;