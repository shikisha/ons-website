// components/ServiceCard.js
import React from 'react';
import './ServiceCard.css'; // include CSS for flip effect

const ServiceCard = ({ title, description, icon, index }) => {
  const columns = 4;
  const row = Math.floor(index / columns);
  const column = index % columns;

  // Checkerboard logic
  const isEven = (row + column) % 2 === 0;
  const cardColor = isEven ? 'bg-pink-50 text-[#b6d455]' : 'bg-[#b6d455] text-pink-50';

  return (
    <div className="flip-card w-[25%] h-[350px]">
      <div className="flip-card-inner">
        <div className={`flip-card-front flex flex-col justify-center items-center shadow-md ${cardColor}`}>
          <img src={icon} alt={title} className="w-52 h-52 mb-2" />
          <h3 className="font-bold ">{title}</h3>
        </div>
        <div className={`flip-card-back flex flex-col justify-center items-center shadow-md ${cardColor}`}>
          <h3 className=" font-bold">{title}</h3>
          <p className="text-sm mt-2 text-center">{description}</p>
          <p className="text-pink-500 text-sm mt-2">READ MORE</p>
        </div>
      </div>
    </div>
  );
};



export default ServiceCard;
