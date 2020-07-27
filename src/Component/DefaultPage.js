import React from "react";
import styled from "styled-components";
import Montain from "../Images/intro.jpg";

const Text = styled.h1`
  font-size: 5rem;
  display: flex;
  align-items: center;
  font-weight: lighter;
  background-image: url(${Montain});
  height: 100vh;
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
  font-weight: 300;
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
  color: #5d0203;
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
            className="display-4 bg-transparent "
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
              className="btn btn-outline-danger"
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
          textColor="#e80c2f"
          className="col-sm mt-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Introducing
          <br />
          vpix
          <NomralText paraColor="#D30C2F">
            Vpix is a website dedicated to sharing stock photography under the
            Unsplash API . Vpix is a third party project, developed as a project
            that would not be licenced under Unsplash.
          </NomralText>
        </MessageTitle>
        <MessageTitle
          textColor="#e80c2f"
          className="col mt-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Fast & Easy
          <NomralText paraColor="#D30C2F" className="pb-3">
            Browse the images with fast and easy, The only Top 10 images will be
            displayed at a time !{" "}
          </NomralText>
        </MessageTitle>
      </div>
      <div className="container row m-auto">
        <MessageTitle
          textColor="#e80c2f"
          className="col-sm mt-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          {" "}
          Vpix
          <NomralText paraColor="#D30C2F">
            {" "}
            A image search engine <br />
            Powered by: Unsplash API.
          </NomralText>
        </MessageTitle>
        <MessageTitle
          textColor="#e80c2f"
          className="col-sm mt-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          About
          <NomralText paraColor="#D30C2F" className="pb-0">
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
