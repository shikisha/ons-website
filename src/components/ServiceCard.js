import React,{useState} from 'react';

const ServiceCard = ({ title, description, icon, index }) => {
 
  const [isFlipped,setIsFlipped] = useState(false);

  const columns = 4;
  const row = Math.floor(index / columns);
  const column = index % columns;
  const isEven = (row + column) % 2 === 0;
  const cardColor = isEven ? 'bg-pink-50 text-[#b6d455]' : 'bg-[#b6d455] text-pink-50';

  return (
    <div className="w-full h-[350px] p-2">
      <div className="flip-card group w-full h-full">
        {/* <div className="flip-card-inner group-hover:rotate-y-180"> */}
        <div
          className={`flip-card-inner ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front */}
          <div className={`flip-card-front flex flex-col justify-center items-center shadow-md ${cardColor}`}>
            <img src={icon} alt={title} className="w-28 h-28 mb-2" />
            <h3 className="font-bold text-center px-2">{title}</h3>
          </div>

          {/* Back */}
          <div className={`flip-card-back flex flex-col justify-center items-center shadow-md ${cardColor}`}>
            <h3 className="font-bold text-center">{title}</h3>
            <p className="text-sm mt-2 text-center px-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
