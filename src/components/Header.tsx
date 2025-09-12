"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-20 lg:h-32 px-4 absolute top-0 left-0 right-0 z-50 ">
      <div className=" container m-auto ">
        <div className="hidden lg:flex justify-between items-center w-full h-full">
          <div>
            <Image
              src="/gov-brasil.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/unifatecie-logo.png"
              alt="logo"
              width={250}
              height={125}
            />
          </div>
          <div className="flex items-center gap-8">
            <Link href="/inscricao">
              <button className="text-white rounded-3xl bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 py-2 px-6 font-semibold cursor-pointer hover:from-primary-200 hover:via-primary-300 hover:to-primary-100 transition-all duration-300">
                INSCREVA-SE
              </button>
            </Link>
            <Link href="/">
              <HomeIcon className="text-white w-8 h-8 hover:text-primary-100 transition-colors cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex justify-between items-center w-full  h-full">
          <Image
            src="/gov-brasil.png"
            alt="logo"
            width={80}
            height={60}
            className="object-center"
          />
          <Image
            src="/unifatecie-logo.png"
            alt="logo"
            width={120}
            height={60}
            className="object-contain"
          />
          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:bg-gray-700 rounded-lg transition-colors px-4"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          className={`lg:hidden absolute top-20 left-0 right-0 bg-[#17191B] border-t border-gray-600 z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center gap-6">
              <Link href="/">
                <button className="flex items-center gap-3 text-white hover:text-primary-100 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-800/50">
                  <HomeIcon className="w-6 h-6" />
                  <span className="text-lg font-medium">Home</span>
                </button>
              </Link>
              <div className="w-full h-px bg-gray-600"></div>
              <Link href="/inscricao">
                <button className="w-full bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 hover:from-primary-200 hover:via-primary-300 hover:to-primary-100 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="text-lg">INSCREVA-SE</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
