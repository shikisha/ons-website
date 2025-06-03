import React from "react";
import brands from "../data/brands";

export default function BrandSection() {
  return (
    <section className="bg-[#eff4df] py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-pink-500 mb-8">
          We use best Brands in 1-Time use packs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center h-36"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
