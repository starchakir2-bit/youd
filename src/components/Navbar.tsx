import React from 'react';
import Logo from './Logo';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

const menuItems = [
  "Domains",
  "Hosting",
  "WordPress",
  "Email",
  "Marketing Tools",
  "Security",
  "Help Center",
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-border-color sticky top-0 z-50 h-[72px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          {/* Left side: Logo and Desktop Menu */}
          <div className="flex items-center gap-10">
            <Logo />
            <div className="hidden xl:flex items-center gap-5">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[13px] font-medium text-[#4B5563] hover:text-primary-orange transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right side: Actions */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-5 text-[13px] font-semibold text-[#4B5563]">
              <a href="#" className="hover:text-primary-orange">Account</a>
              <button className="text-gray-600 hover:text-primary-orange transition-colors">
                <ShoppingCart size={20} />
              </button>
            </div>

            <button className="xl:hidden p-2 text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
