import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 375px) {
    height: 45vh;
  }
`;

const CapsuleStyle = styled.div`
    @media (max-width: 768px) {
    width: 80vw;
    height: 18vh;
    border-radius: 150px;
  }

    @media (max-width: 375px) {
    width: 95vw;
    height: 25vh;
    border-radius: 120px;
    }
`;
const TextContent = styled.div`
  h2 {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 375px) {
      font-size: 1rem;
    }
  }

  p {
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 375px) {
      font-size: 0.7rem;
    }
  }
`;
const Capsule =()=>{
    return(
        <>
        <Wrapper>
            <div style={{width : "100vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
                
                <div style={{width : "70vw",height : "20vh",borderRadius:"200px",display:"flex",alignItems:"center",justifyContent:"center",background:"red"}}>
                    <TextContent>
                    <div style={{height:"80px",display:"flex",flexDirection:"column",justifyContent:"space-between",color:"white",textAlign:"center",fontSize: "100%",fontFamily:"Work-Sans,sans-serif"}}>
                        <h2>Learners Today, Leaders Tomorrow</h2>
                        <div>
                            <p>with our continous research and development, we provide</p>
                            <p>you with an excellent Aptitude training.</p>
                        </div>
                    </div>
                    </TextContent>
                </div>
            </div>
            </Wrapper>
        </>
    );
}

export default Capsule;