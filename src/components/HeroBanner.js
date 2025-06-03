// src/components/HeroBanner.js
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative bg-pink-50 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-5 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#b6d455] leading-tight">
            <span className="block font-ruthie  text-6xl">Bridal</span>
            {/* <h1 className="font-script text-4xl">Bridal Makeover</h1> */}
            <span className="text-[#FF92D4]">Makeover</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Look your best on your big day. Experience our premium salon services from experts in bridal beauty.
          </p>
          <Link href="#services">
            <button className="mt-4 px-6 py-3 bg-[#9FCC04] text-white rounded-md hover:bg-[#FF92D4]">
              View Services
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src="/bride.png"
            alt="Bridal Makeover"
            width={600}
            height={700}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
