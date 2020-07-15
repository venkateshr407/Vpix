import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.img`
  width:10;
  object-fit:cover;
  :hover{
  background-color: rgb(3, 52, 92);
  transition: 0.5s  ease-in-out;
  }
`
const ImageList = props => {
  const images = props.images.map( ({id, urls, alt_description, likes}) => {
        return <div className="jumbotron-fluid m-0 p-0 bg-transparent">
                    <ImageBox key={id} src={urls.regular} />
                    <div className="jumbotron-fluid m-0 bg-red p-0">
                      <h1 className="text-desc">{alt_description}</h1>
                      <h4 className="paralike">likes : {likes}</h4>
                    </div>
              </div>      
    });
    
  return(
    <div className="image-content">{images}
   </div>
  ); 
};
export default ImageList;