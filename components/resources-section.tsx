"use client";
import React, { useState } from "react";

function MainComponent() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="w-full px-4 md:px-8 py-12 bg-white dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 font-inter">
        Explore our resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div
          className={`rounded-xl bg-[#F3E8FF] dark:bg-[#4B0082] p-6 transition-transform duration-300 cursor-pointer ${
            isHovered === 0 ? "transform scale-105" : ""
          }`}
          onMouseEnter={() => setIsHovered(0)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="text-sm font-inter text-gray-900 dark:text-white mb-4">
            NEW IN HEXNODE
          </div>
          <h3 className="text-xl font-bold font-inter text-gray-900 dark:text-white mb-4">
            Hexnode Deployments: A new way to manage devices
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 font-inter">
            Use Hexnode the way you like it with bespoke device management
            processes, automation, and much more.
          </p>
          <div className="flex items-center text-gray-900 dark:text-white font-inter">
            Learn More
            <i className="fas fa-arrow-right ml-2"></i>
          </div>
        </div>

        <div
          className={`rounded-xl bg-[#E8F4FF] dark:bg-[#0066CC] p-6 transition-transform duration-300 cursor-pointer ${
            isHovered === 1 ? "transform scale-105" : ""
          }`}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="text-sm font-inter text-gray-900 dark:text-white mb-4">
            RECOGNITION
          </div>
          <i className="fas fa-trophy text-3xl mb-4 text-gray-900 dark:text-white"></i>
          <h3 className="text-xl font-bold font-inter text-gray-900 dark:text-white mb-4">
            IDC MarketScape: Worldwide Unified Endpoint Management Software 2024
            Vendor Assessment
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 font-inter">
            Discover top UEM vendors, innovations, and market leadership
            insights.
          </p>
          <div className="flex items-center text-gray-900 dark:text-white font-inter">
            Get Report
            <i className="fas fa-arrow-right ml-2"></i>
          </div>
        </div>

        <div
          className={`rounded-xl bg-[#E8FFE8] dark:bg-[#006400] p-6 transition-transform duration-300 cursor-pointer ${
            isHovered === 2 ? "transform scale-105" : ""
          }`}
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="text-sm font-inter text-gray-900 dark:text-white mb-4">
            WEBINAR
          </div>
          <i className="fas fa-chart-line text-3xl mb-4 text-gray-900 dark:text-white"></i>
          <h3 className="text-xl font-bold font-inter text-gray-900 dark:text-white mb-4">
            Navigating the Future of Device Management and Security in UEM:
            Essential Insights for Businesses
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 font-inter">
            Explore future trends shaping UEM device management and security
            strategies.
          </p>
          <div className="flex items-center text-gray-900 dark:text-white font-inter">
            Watch Webinar
            <i className="fas fa-arrow-right ml-2"></i>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className={`rounded-xl bg-[#FFF3E8] dark:bg-[#CC6600] p-6 transition-transform duration-300 cursor-pointer ${
            isHovered === 3 ? "transform scale-105" : ""
          }`}
          onMouseEnter={() => setIsHovered(3)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="text-sm font-inter text-gray-900 dark:text-white mb-4">
            CASE STUDY
          </div>
          <h3 className="text-xl font-bold font-inter text-gray-900 dark:text-white mb-4">
            Digital Transformation Success: Global Retail Chain Implementation
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 font-inter">
            Learn how a major retail chain streamlined operations across 500+
            locations using our solution.
          </p>
          <div className="flex items-center text-gray-900 dark:text-white font-inter">
            Read Story
            <i className="fas fa-arrow-right ml-2"></i>
          </div>
        </div>

        <div
          className={`rounded-xl bg-[#E8FFF9] dark:bg-[#006666] p-6 transition-transform duration-300 cursor-pointer ${
            isHovered === 4 ? "transform scale-105" : ""
          }`}
          onMouseEnter={() => setIsHovered(4)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="text-sm font-inter text-gray-900 dark:text-white mb-4">
            PRODUCT UPDATE
          </div>
          <h3 className="text-xl font-bold font-inter text-gray-900 dark:text-white mb-4">
            Enhanced Security Features: 2024 Edition
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 font-inter">
            Discover our latest security enhancements, including AI-powered
            threat detection and response.
          </p>
          <div className="flex items-center text-gray-900 dark:text-white font-inter">
            See Features
            <i className="fas fa-arrow-right ml-2"></i>
          </div>
        </div>

        <div
          className={`rounded-xl bg-[#FFE8F3] dark:bg-[#CC0066] p-6 transition-transform duration-300 cursor-pointer ${
            isHovered === 5 ? "transform scale-105" : ""
          }`}
          onMouseEnter={() => setIsHovered(5)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="text-sm font-inter text-gray-900 dark:text-white mb-4">
            CUSTOMER SUCCESS
          </div>
          <h3 className="text-xl font-bold font-inter text-gray-900 dark:text-white mb-4">
            Enterprise Mobility Management: Banking Sector Innovation
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 font-inter">
            How leading banks are securing their mobile workforce with next-gen
            solutions.
          </p>
          <div className="flex items-center text-gray-900 dark:text-white font-inter">
            View Success Story
            <i className="fas fa-arrow-right ml-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;