// components/Footer.js
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[url('/images/wild-flowers.png')] bg-repeat bg-[#FF92D4] text-white py-10 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo + Description + Socials */}
        <div>
          <Link href="/">
          {/* <span className="text-2xl font-bold text-pink-600">Ons Makeover</span> */}
          <img src="/logo.png" width={100} height={100} />
        </Link>
          <p className="text-sm text-white mb-4">
            ONS Makeover, where luxury meets beauty. Offering premium services and top-tier products,
            we provide a haven for clients to experience the best in hair, skin, and body grooming.
            Discover luxury with Page 3 Salon.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2 bg-pink-500 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-pink-500 rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-pink-500 rounded-full">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-pink-700">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-[#889f40]">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-semibold mb-3 text-pink-700">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Hair Services</a></li>
            <li><a href="#">Grooming</a></li>
            <li><a href="#">Color & Texture</a></li>
            <li><a href="#">Skin</a></li>
            <li><a href="#">Nails</a></li>
            <li><a href="#">Bridal Services</a></li>
            <li><a href="#">Aesthetics</a></li>
            <li><a href="#">Body Therapy</a></li>
          </ul>
        </div>

        {/* Column 4: Working Hours + Join */}
        <div>
          <h3 className="font-semibold mb-3 text-pink-700">WORKING HOURS</h3>
          <p className="text-sm mb-4">
            MON – FRI : 10AM – 9PM <br />
            SAT – SUN : 9AM – 9PM
          </p>

          <h3 className="font-semibold mb-2 text-pink-700">JOIN ONS Makeover</h3>
          <p className="text-sm mb-2">
            Get insider info on product launches, discounts, and everything fine.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email-id"
              className="p-2 flex-grow rounded-l-md text-black"
            />
            <button className="bg-[#b6d455] px-4 rounded-r-md text-black">
              ➤
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10 border-t border-pink-600 pt-4">
        ©Copyright 2025 ONS Makeover Salon. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
