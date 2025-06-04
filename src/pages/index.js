// src/pages/index.js
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ServiceList from "@/components/ServiceList";
import WhyOnsMakeover from "@/components/WhyOnsMakeover";
import WhyGetLook from "@/components/WhyOnsMakeover";
import BrandSection from "@/components/Brands";
import Footer from "@/components/Footer";
import TopMarquee from "@/components/TopMarquee";


export default function Home() {
  return (
    <>
      <div className="min-h-[80vh]">
        <TopMarquee/>
        <Navbar />
        <HeroBanner />

        <section id="services">
          <ServiceList />
        </section>

        <section id="why">
          <WhyGetLook />
        </section>

        <section id="brands">
          <BrandSection />
        </section>
      </div>

      <Footer />
    </>
  );
}

