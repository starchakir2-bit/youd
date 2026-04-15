import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] pt-20 pb-10 border-t border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Empowering creators and businesses with affordable domains and powerful online tools.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-text-dark mb-6">Domains</h4>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              <li><a href="#" className="hover:text-primary-orange">Domain Search</a></li>
              <li><a href="#" className="hover:text-primary-orange">Transfer</a></li>
              <li><a href="#" className="hover:text-primary-orange">Personal Domains</a></li>
              <li><a href="#" className="hover:text-primary-orange">Marketplace</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-6">Hosting</h4>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              <li><a href="#" className="hover:text-primary-orange">Shared Hosting</a></li>
              <li><a href="#" className="hover:text-primary-orange">WordPress Hosting</a></li>
              <li><a href="#" className="hover:text-primary-orange">VPS Hosting</a></li>
              <li><a href="#" className="hover:text-primary-orange">Dedicated Servers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              <li><a href="#" className="hover:text-primary-orange">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-orange">Live Chat</a></li>
              <li><a href="#" className="hover:text-primary-orange">Report Abuse</a></li>
              <li><a href="#" className="hover:text-primary-orange">Status</a></li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="font-bold text-text-dark mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              <li><a href="#" className="hover:text-primary-orange">About Us</a></li>
              <li><a href="#" className="hover:text-primary-orange">Careers</a></li>
              <li><a href="#" className="hover:text-primary-orange">Press</a></li>
              <li><a href="#" className="hover:text-primary-orange">Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-color flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2026 YOUD.IO Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
            <a href="#" className="hover:text-gray-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
