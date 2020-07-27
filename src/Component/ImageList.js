import React from "react";
import styled from "styled-components";

const ImageBox = styled.img`
  width: 10;
  position: relative;
  object-fit: cover;
  :hover {
    color: rgb(250, 246, 246);
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
      linear,
      0% 0%,
      0% 100%,
      color-stop(-0.3, transparent),
      to(rgb(20, 20, 20))
    );
    opacity: 0.5;
    transition: 0.4s ease-in-out 0s;
  }
`;
const ImageList = (props) => {
  const images = props.images.map(({ id, urls, alt_description, likes }) => {
    return (
      <div
        className=" m-0 p-0 bg-transparent"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <ImageBox key={id} src={urls.regular} />
        <div className=" m-0 bg-red p-0">
          <h1 className="text-desc bg-transparent">{alt_description}</h1>
          <h4 className="paralike bg-transparent">likes : {likes}</h4>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="image-content">{images}</div>
    </>
  );
};
export default ImageList;
