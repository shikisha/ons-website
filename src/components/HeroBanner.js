// src/components/HeroBanner.js
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative bg-pink-50 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-5 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#b6d455] leading-tight">
            <span className="block font-ruthie text-5xl sm:text-6xl">Bridal</span>
            <span className="text-[#FF92D4]">Makeover</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Look your best on your big day. Experience our premium salon services from experts in bridal beauty.
          </p>
          <Link href="#services">
            <button className="mt-4 px-6 py-3 bg-[#9FCC04] text-white rounded-md hover:bg-[#FF92D4] transition duration-300">
              View Services
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/bride.png"
            alt="Bridal Makeover"
            width={600}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
