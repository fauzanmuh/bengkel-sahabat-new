"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[75%] lg:w-[90%] xl:w-[70%] bg-[#E9F5BE]/90 backdrop-blur-md shadow-lg lg:rounded-full rounded-2xl md:px-6 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/img/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span className="text-[#06202B] font-bold text-md md:text-xl">
            Bengkel Sahabat Fonda
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 text-[#547792] font-medium">
          <Link
            href="/"
            className="hover:text-[#273F4F] hover:border-b hover:border-[#273F4F]"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#273F4F] hover:border-b hover:border-[#273F4F]"
          >
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-[#273F4F] hover:border-b hover:border-[#273F4F]"
          >
            Pelayanan
          </Link>
          <Link
            href="/review"
            className="hover:text-[#273F4F] hover:border-b hover:border-[#273F4F]"
          >
            Review
          </Link>
          <Link
            href="/keuntungan"
            className="hover:text-[#273F4F] hover:border-b hover:border-[#273F4F]"
          >
            Keuntungan
          </Link>
          <Link
            href="/location"
            className="hover:text-[#273F4F] hover:border-b hover:border-[#273F4F]"
          >
            Lokasi
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-[#F1BA88]" />
            ) : (
              <Menu size={28} className="text-[#F1BA88]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-4 pb-6 pt-2 text-[#547792] rounded-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>
            Pelayanan
          </Link>
          <Link href="/review" onClick={() => setIsOpen(false)}>
            Review
          </Link>
          <Link href="/keuntungan" onClick={() => setIsOpen(false)}>
            Keuntungan
          </Link>
          <Link href="/location" onClick={() => setIsOpen(false)}>
            Lokasi
          </Link>
        </div>
      )}
    </nav>
  );
}
