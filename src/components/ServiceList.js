// components/ServicesList.js
import React from 'react';
import  services  from '../data/services';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  return (
    // <div className="flex flex-wrap justify-center py-10">
    <>
     <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-[#b6d455] leading-tight text-center pt-5">
            <span className="font-ruthie text-5xl sm:text-6xl">Our</span>
            <span className="text-[#FF92D4]">Services</span>
          </h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 pb-10 pt-5">
      {services.map((service,index) => (
        <ServiceCard
          index={index}
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
    </>
  );
};

export default ServicesList;
