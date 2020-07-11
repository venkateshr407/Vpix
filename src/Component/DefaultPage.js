import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
    font-size:5rem;
    font-weight:lighter;
    background: #0F2027; 
    background: -webkit-linear-gradient(to left, #2C5364, #203A43, #0F2027);  
    background: linear-gradient(to left, #2C5364, #203A43, #0F2027);
    color:#fff;

`;
const NomralText = styled.div`
    color:${props => props.paraColor || "#74747 white"};
    font-size:16px;
    margin:0.5rem 0rem 0 0rem;
    `;

const MessageTitle = styled.div`
    margin:2rem 0rem 2rem 1rem;
    font-size:3rem;
    color:${props => props.textColor || "#54515 White"};
    font-weight:900;
`;

const day = new Date().getDay();
const date = new Date().getDate();
const year = new Date().getFullYear();


 const days = ["Sunday","Monday","Tuesday",
              "Wednesday","Thursday","Friday","Saturday"];
    let display = days[day];

const WhichDay = styled.p`
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    font-size:16px;
    margin:0rem 0 1rem 0;
    color:#ffff;
    `;


 const DefaultPage = () => {
    return(
        <div>
            <Text className="jumbotron jumbotron-fluid">
                <div className="container">
                <WhichDay>{date} {display} {year}</WhichDay>
                    <h1 className="display-4">Welcome to Vpix</h1>
                        <p className="lead">A stock photography site.</p>      
                        <p><a className="btn btn-outline-info btn-lg" href="/search" role="button">Get into search </a>
                    </p>
               </div>
            </Text> 
            <div className="container row m-auto">
                <MessageTitle textColor="#148554" className="col-sm ">Introducing <br/>
                VPIX
                    <NomralText paraColor="#747474" >Vpix is a website dedicated to sharing stock photography under the Unsplash API .
                                Vpix is a third party project, developed as a project that would not be licenced under Unsplash. 
                    </NomralText>
                </MessageTitle>
            
                    <MessageTitle textColor="#148554" className="col-sm">About
                        <NomralText paraColor="#747474">
                            Vpix is react-project, developing by  
                            <a href="https:/venkycreations.netlify.app"> Venkatesh</a>
                        </NomralText>
                    </MessageTitle>
            </div>
            <div className="container">
                <MessageTitle  textColor="#148554" className="col">Vpix
                    <NomralText paraColor="#747474">Powered by : Unsplash API</NomralText>
                </MessageTitle>
            </div>
    </div>
        
    );
}
export default DefaultPage;