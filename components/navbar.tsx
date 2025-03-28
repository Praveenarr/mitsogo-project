"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (index: number) => setSubmenuOpen(submenuOpen === index ? null : index);

  return (
    <nav className="w-full bg-[#0a0e1a] text-white py-3">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold">hexnode</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Solutions</span>
              <ChevronDown size={14} />
            </button>

            {/* Solutions Dropdown Content */}
            <div className="absolute left-0 mt-2 w-[650px] bg-white text-black p-4 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                {[
                  { title: "Hexnode UEM", desc: "Manage mobiles, PCs, and wearables." },
                  { title: "Hexnode Kiosk", desc: "Lockdown devices for security." },
                  { title: "Secure Browser", desc: "Protect against online threats." },
                  { title: "Digital Signage", desc: "Manage digital signage." },
                  { title: "Hexnode Genie", desc: "AI-based device management." },
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg hover:shadow-lg transition bg-white border">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
































          {/* Other Nav Links */}
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/customers" className="hover:underline">Customers</Link>
          <Link href="/resources" className="hover:underline">Resources</Link>
       {/* Partner Dropdown on Hover (Desktop) */}
       <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Partners</span>
              <ChevronDown size={14} />
            </button>

            {/* Partner Dropdown Content */}
            <div className="absolute left-0 mt-2 w-[500px] bg-white text-black p-4 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {[
                  { title: "Partner Programs", desc: "Explore partnership programs." },
                  { title: "Reseller Partnership", desc: "Sell security solutions." },
                  { title: "MSP Partnership", desc: "Scale endpoint management." },
                  { title: "OEM Partnership", desc: "Integrate Hexnode solutions." },
                  { title: "Distribution Program", desc: "Become an official distributor." },
                  { title: "ISV Partnership", desc: "Sell and explore UEM market." },
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg hover:shadow-lg transition bg-white border">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link href="/company" className="hover:underline">Company</Link>
        </div>

      

        {/* Right Section - Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="px-4 py-2 text-sm hover:underline">Login</Link>
          <Link href="/signup" className="px-4 py-2 bg-[#ff5c35] text-white rounded hover:bg-[#e24d29]">
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#0a0e1a] text-white flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button className="absolute top-5 right-5" onClick={toggleMenu}>
            <X size={32} />
          </button>

          {/* Mobile Navigation */}
          <div className="flex flex-col items-center space-y-4 text-lg">
            <Link href="/" className="hover:underline" onClick={toggleMenu}>Home</Link>
            <button className="flex items-center space-x-1" onClick={() => toggleSubmenu(1)}>
              <span>Solutions</span> <ChevronDown size={18} />
            </button>
            {submenuOpen === 1 && (
              <div className="flex flex-col items-center text-sm space-y-2">
                <Link href="#" className="hover:underline" onClick={toggleMenu}>Hexnode UEM</Link>
                <Link href="#" className="hover:underline" onClick={toggleMenu}>Hexnode Kiosk</Link>
                <Link href="#" className="hover:underline" onClick={toggleMenu}>Secure Browser</Link>
              </div>
            )}

            <button className="flex items-center space-x-1" onClick={() => toggleSubmenu(2)}>
              <span>Partners</span> <ChevronDown size={18} />
            </button>
            {submenuOpen === 2 && (
              <div className="flex flex-col items-center text-sm space-y-2">
                <Link href="#" className="hover:underline" onClick={toggleMenu}>Partner Programs</Link>
                <Link href="#" className="hover:underline" onClick={toggleMenu}>Reseller Partnership</Link>
                <Link href="#" className="hover:underline" onClick={toggleMenu}>MSP Partnership</Link>
              </div>
            )}

            <Link href="/pricing" className="hover:underline" onClick={toggleMenu}>Pricing</Link>
            <Link href="/customers" className="hover:underline" onClick={toggleMenu}>Customers</Link>
            <Link href="/company" className="hover:underline" onClick={toggleMenu}>Company</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
