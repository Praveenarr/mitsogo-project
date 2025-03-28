import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full bg-[#0a0e1a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The Standard for Unified Endpoint Management
            </h1>
            <p className="text-lg">Manage devices of varying form factors and operating systems with one solution</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded text-center uppercase"
              >
                Try for free
              </Link>
              <Link
                href="#"
                className="border border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded text-center uppercase"
              >
                Request demo
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="https://static.hexnode.com/img/home_page/images/2x/featured/v2/device-management-automated.jpg"
              alt="Woman using tablet"
              width={600}
              height={500}
              className="rounded-lg women"
            />
          </div>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-gray-700 pt-8">
          <div className="space-y-3">
            <Image src="/placeholder.svg?height=40&width=100" alt="IDC Logo" width={100} height={40} className="mb-4" />
            <p className="text-sm">
              Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>

          <div className="space-y-3">
            <Image
              src="/placeholder.svg?height=40&width=100"
              alt="Gartner Logo"
              width={100}
              height={40}
              className="mb-4"
            />
            <p className="text-sm">
              Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.
            </p>
          </div>

          <div className="space-y-3">
            <Image
              src="/placeholder.svg?height=40&width=100"
              alt="Forrester Logo"
              width={100}
              height={40}
              className="mb-4"
            />
            <p className="text-sm">
              Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
            </p>
          </div>
        </div> */}

 {/* <div className="w-full bg-[#0A0F1C] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-6xl mx-auto">
          
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 px-6 cursor-pointer transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <img 
                src="https://static.hexnode.com/img/home_page/images/icons/idc-logo.png" 
                alt="IDC Market Research Logo"
                className="idc"
              />
         
            </div>
            <p className="text-[#64748B] font-inter text-sm leading-relaxed mt-4">
              Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 px-6 cursor-pointer transition-all duration-300 hover:scale-105">
            <h3 className="text-[#6366F1] font-inter text-xl font-semibold mb-4 gatner">
              Gartner® 
            </h3>
            <p className="text-[#64748B] font-inter text-sm leading-relaxed  ">
              Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-6 cursor-pointer transition-all duration-300 hover:scale-105">
            <h3 className="text-[#6366F1] font-inter text-xl font-semibold mb-4 gatner">
              FORRESTER
            </h3>
            <p className="text-[#64748B] font-inter text-sm leading-relaxed">
              Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
            </p>
          </div>

        </div>
      </div>
    </div> */}
     

      <div className="w-full bg-[#0A0F1C] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-6xl mx-auto">
          
          {/* IDC Section */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 px-6 cursor-pointer transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <img 
                src="https://static.hexnode.com/img/home_page/images/icons/idc-logo.png" 
                alt="IDC Market Research Logo"
                className="w-24 h-auto idc"
              />
            </div>
            <p className="text-[#64748B] font-inter text-sm leading-relaxed mt-4">
              Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>

          {/* Gartner Section */}
          <div className="flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 px-6 cursor-pointer transition-all duration-300 hover:scale-105">
            <h3 className="text-white text-xl font-semibold mb-4">
              Gartner® 
            </h3>
            <p className="text-[#64748B] font-inter text-sm leading-relaxed">
              Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.
            </p>
          </div>

          {/* Forrester Section */}
          <div className="flex flex-col items-center text-center px-6 cursor-pointer transition-all duration-300 hover:scale-105">
            <h3 className="text-white text-xl font-semibold mb-4">
              FORRESTER
            </h3>
            <p className="text-[#64748B] font-inter text-sm leading-relaxed">
              Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
            </p>
          </div>

        </div>
      </div>
    </div>
      </div>
    </section>
  )
}

