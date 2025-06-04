import { useEffect, useState } from "react";
import Link from "next/link";

const sections = ["home", "services", "why", "brands", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(entry => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const linkStyle = (id) =>
    `font-medium ${
      activeSection === id ? "text-pink-500" : "text-gray-700"
    } hover:text-[#b6d455]`;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/"><img src="/logo.png" width={70} height={40} /></Link>

        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className={linkStyle("services")}>Services</a>
          <a href="#brands" className={linkStyle("brands")}>Brands</a>
          <a href="#why" className={linkStyle("why")}>Why Ons?</a>
          <a href="#contact" className={linkStyle("contact")}>Contact</a>
        </nav>

        <button
          className="bg-[#FF92D4] text-white px-4 py-2 rounded-md hover:bg-[#b6d455]"
          onClick={() =>
            window.open(
              `https://wa.me/917037030701?text=${encodeURIComponent(
                "Hello ONS Makeover, I have a question about your services"
              )}`,
              "_blank"
            )
          }
        >
          Book Now
        </button>
      </div>
    </header>
  );
}
