import React from "react";
import styled from "styled-components";
import LandingImage from "../Images/jaipur.png";

const Text = styled.h1`
  font-size: 5rem;
  display: flex;
  align-items: center;
  font-weight: lighter;
  background-image: url(${LandingImage});
  position: relative;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  background-size: cover;
`;
const Heading = styled.h1`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  text-align: center;
  font-weight: 900;
  font-size: 4rem;
`;
const NomralText = styled.div`
  color: ${(props) => props.paraColor || "#74747 white"};
  font-size: 16px;
  font-weight: 300;
  margin: 0.5rem 0rem 0 0rem;
`;

const MessageTitle = styled.div`
  font-size: 3rem;
  color: ${(props) => props.textColor || "#e80c2f White"};
  font-weight: 600;
`;
const day = new Date().getDay();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let display = days[day];

const WhichDay = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 20px;
  margin: 0rem 0 1rem 0;
  color: #fff;
`;
const Badge = styled.img`
  width: 10%;
`;

const DefaultPage = () => {
  return (
    <>
      <Text className="jumbotron jumbotron-fluid">
        <div className="container  bg-transparent">
          <WhichDay className="bg-transparent">Hello {display} !</WhichDay>
          <Heading
            className="display-4 bg-transparent animate__animated animate__fadeIn"
            style={{ color: "#fff" }}
          >
            Photos for everyone
          </Heading>
          <p
            className="bg-transparent"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <a
              type="button"
              className="btn btn-outline-info"
              style={{ color: "white" }}
              href="/search"
            >
              Get into search
            </a>
          </p>
        </div>
      </Text>
      <div className="container row m-auto">
        <MessageTitle
          textColor="#004d40 "
          className="col-sm mt-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Introducing
          <br />
          vpix
          <NomralText paraColor="#006064">
            Vpix is a website dedicated to sharing stock photography under the
            Unsplash API . Vpix is a third party project, developed as a project
            that would not be licenced under Unsplash.
          </NomralText>
        </MessageTitle>
        <MessageTitle
          textColor="#004d40 "
          className="col mt-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Fast & Easy
          <NomralText paraColor="#006064" className="pb-3">
            Browse the images with fast and easy, The only Top 10 images will be
            displayed at a time !{" "}
          </NomralText>
        </MessageTitle>
      </div>
      <div className="container row m-auto">
        <MessageTitle
          textColor="#004d40 "
          className="col-sm mt-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          {" "}
          Vpix
          <NomralText paraColor="#006064">
            {" "}
            A image search engine <br />
            Powered by: Unsplash API.
          </NomralText>
        </MessageTitle>
        <MessageTitle
          textColor="#004d40 "
          className="col-sm mt-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          About
          <NomralText paraColor="#006064" className="pb-0">
            Vpix is react-project, developed by Venkatesh
          </NomralText>
          <a href="https://dev.to/venkateshr407">
            <Badge
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Venkatesh.R's DEV Profile"
            />
          </a>
        </MessageTitle>
      </div>
    </>
  );
};
export default DefaultPage;
