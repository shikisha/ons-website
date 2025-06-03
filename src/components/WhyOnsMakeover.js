import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import WhyOnsMakeoverImage from "../../public/images/whyonsmakeover.png";

const WhyOnsMakeover = () => {
  return (
    <section className="bg-pink-50 rounded-2xl mx-4 md:mx-12 my-8 shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-8">
        
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#FF92D4] mb-8">
            Why ONS MAKEOVER?
          </h2>
          <ul className="space-y-6 text-lg text-black">
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] rounded-full border-2 border-red-600 flex items-center justify-center mt-1">
                <Check size={14} className="text-[#FF92D4]" />
              </div>
              Best Brands in 1-time use packs
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] rounded-full border-2 border-red-600 flex items-center justify-center mt-1">
                <Check size={14} className="text-[#FF92D4]" />
              </div>
              Trained, Verified beauticians
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] rounded-full border-2 border-red-600 flex items-center justify-center mt-1">
                <Check size={14} className="text-[#FF92D4]" />
              </div>
              Mess Free Service
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={WhyOnsMakeoverImage}
            alt="Beautician doing makeup"
            className="max-w-[70%] h-auto -mb-8"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default WhyOnsMakeover;
