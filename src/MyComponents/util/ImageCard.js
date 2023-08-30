import React from 'react';
import './ImageCard.css';
const ImageCard = ({ imageUrl }) => {
  return (
   
       <img className="image-card" src={imageUrl} alt="Card" width="500" height="400" /> 
           
       );
};

export default ImageCard;
