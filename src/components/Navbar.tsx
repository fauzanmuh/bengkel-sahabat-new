"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#E9F5BE] shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/img/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span className="text-[#06202B] font-bold text-lg sm:text-xl">
            Bengkel Sahabat
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-[#547792] font-medium">
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
        <div className="md:hidden">
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
        <div className="md:hidden flex flex-col gap-4 px-4 pb-6 pt-2 bg-[#E9F5BE] text-[#547792]">
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
