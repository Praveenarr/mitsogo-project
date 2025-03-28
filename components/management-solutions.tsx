"use client";
import React, { useState, useEffect } from "react";

export default function ManagementSolutions() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const solutions = [
    {
      title: "Unified Endpoint Management",
      image:
        "https://ucarecdn.com/f114b7a3-e703-4db8-8c78-ad3bc0d9fa02/-/format/auto/",
      alt: "Unified endpoint management interface showing multiple device controls",
    },
    {
      title: "Mobile Device Management",
      image: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg",
      alt: "Mobile device management interface with smartphone controls",
    },
    {
      title: "Kiosk Lockdown Management",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      alt: "Kiosk management system interface with tablet controls",
    },
    {
      title: "Rugged Device Management",
      image:
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      alt: "Rugged device management interface showing industrial device controls",
    },
    {
      title: "IoT Management",
      image:
        "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg",
      alt: "IoT management dashboard showing connected devices",
    },
    {
      title: "Digital Signage Software",
      image:
        "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg",
      alt: "Digital signage management interface with display controls",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white font-inter mb-16">
          AI-powered desktop, mobile, and IoT management
        </h1>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex flex-col p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={solution.image}
                    alt={solution.alt}
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-inter">
                  {solution.title}
                </h3>
                <a
                  href="#"
                  className="group flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-inter transition-colors duration-200"
                >
                  EXPLORE
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-200 group-hover:translate-x-1"></i>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
