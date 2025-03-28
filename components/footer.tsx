"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const menuSections = [
  {
    title: "PRODUCT",
    submenu: [
      "All Features",
      "Pricing",
      "Customers",
      "Customer Stories",
      "Resources",
      "Webinar",
      "Help",
      "Academy",
      "Forums",
      "Developers",
      "Marketplace",
      "Free Trial",
    ],
  },
  {
    title: "SALES & SUPPORT",
    submenu: [
      "US +1-833-HEXNODE (439-6633) Toll-free",
      "UK +44-8003-689920 Toll-free",
      "AU +61-1800-165-939 Toll-free",
      "NZ +64-9-8842599 Direct",
      "CH +41-4-798-2244 Direct",
      "International +1-415-636-7555",
      "Fax +1-415-646-4151",
      "Support support@hexnode.com",
      "Partnership partners@hexnode.com",
    ],
  },
  {
    title: "COMPANY",
    submenu: [
      "About us",
      "Security",
      "GDPR Compliance",
      "Contact us",
      "Sitemap",
      "Blog",
      "News",
      "Events",
      "Careers",
      "Legal",
    ],
  },
  {
    title: "CONTACT US",
    submenu: [
      "Talk to Sales/Support",
      "Schedule a Demo",
      "Watch a Demo",
      "Get a Quote",
      "Raise a Ticket",
      "Hexnode Partner Programs",
      "Reseller Partnership",
      "OEM Partnership",
      "Distribution Program",
      "MSP Partnership",
    ],
  },
];

const FooterMenu = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <footer className="bg-white p-6 shadow-lg border-t">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">hexnode</span>
          <span className="text-sm text-gray-500">security mileage</span>
        </div>

        {isMobile ? (
          /* Mobile View */
          <>
            {menuSections.map((section) => (
              <div key={section.title} className="py-3 border-b border-gray-200">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <span className="text-lg font-semibold">{section.title}</span>
                  <button className="focus:outline-none">
                    {openSections[section.title] ? (
                      <ChevronUp size={20} className="text-gray-700" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-700" />
                    )}
                  </button>
                </div>

                {/* Submenu (Visible when expanded) */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    !openSections[section.title]
                      ? "max-h-0 opacity-0"
                      : "max-h-96 opacity-100"
                  }`}
                >
                  <ul className="mt-2 space-y-2 pl-4 text-gray-600">
                    {section.submenu.map((item, index) => (
                      <li key={index} className="hover:text-gray-800">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        ) : (
          /* Desktop View */
          <div className="grid grid-cols-4 gap-8">
            {menuSections.map((section) => (
              <div key={section.title} className="py-3">
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {section.submenu.map((item, index) => (
                    <li key={index} className="hover:text-gray-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Contact and Social Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="font-semibold mb-2">CONTACT US</h3>
              <p className="text-gray-600">
                The Hexnode Team is coming to RTS 2025. Meet our team at ExCal,
                Booth No. G10, for a quick chat and a coffee.
              </p>
              <button className="mt-2 font-semibold text-blue-600 hover:text-blue-800">
                BOOK MEETING.
              </button>
            </div>
            <div>
              <h3 className="font-semibold mb-2">SOCIAL</h3>
              <p className="text-gray-600">EXISTING USERS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;