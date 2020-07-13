import React from 'react';
import styled from 'styled-components';
import Montain from '../Images/sunset.png'

const Text = styled.h1`
    font-size:5rem;
    font-weight:lighter;

   
   background-color: #ff7700;
background-image: url(${Montain});
/* background-attachment: fixed; */
background-size: cover; 
color:#fff;

`;
const NomralText = styled.div`
    color:${props => props.paraColor || "#74747 white"};
    font-size:16px;
    font-weight:300;
    margin:0.5rem 0rem 0 0rem;
    `;

const MessageTitle = styled.div`
    font-size:3rem;
    color:${props => props.textColor || "#e80c2f White"};
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
const TotalBody = styled.div`
background-color:#500027;
`

 const DefaultPage = () => {
    return(
        <TotalBody>
            <Text className="jumbotron jumbotron-fluid">
                <div className="container">
                <WhichDay>{date} {display} {year}</WhichDay>
                    <h1 className="display-4">Welcome to Vpix</h1>
                        <p className="lead">A stock photography site.</p>      
                        <p><a className="btn btn-outline-danger color- btn-lg" href="/search" role="button">Get into search </a>
                    </p>
               </div>
            </Text> 
            <div className="container row m-auto">
                <MessageTitle textColor="#e80c2f" className="col-sm mt-2">Introducing <br/>
                VPIX
                    <NomralText paraColor="#D30C2F" >Vpix is a website dedicated to sharing stock photography under the Unsplash API .
                                Vpix is a third party project, developed as a project that would not be licenced under Unsplash. 
                    </NomralText>
                </MessageTitle>
            
                    <MessageTitle textColor="#D30C2F" className="col-sm mt-2">About
                        <NomralText paraColor="#D30C2F">
                            Vpix is react-project, developing by  
                            <a href="https:/venkycreations.netlify.app"> Venkatesh</a>
                        </NomralText>
                    </MessageTitle>
            </div>
            <div className="container">
                <MessageTitle  textColor="#e80c2f" className="col mt-3">Vpix
                    <NomralText paraColor="#D30C2F" className="pb-3">Powered by : Unsplash API</NomralText>
                    </MessageTitle>
            </div>
    </TotalBody>
        
    );
}
export default DefaultPage;