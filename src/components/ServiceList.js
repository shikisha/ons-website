// components/ServicesList.js
import React from 'react';
import  services  from '../data/services';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  return (
    <div className="flex flex-wrap justify-center py-10">
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
  );
};

export default ServicesList;
