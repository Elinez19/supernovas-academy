"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { menuItems } from './menuData';
import { MenuItem } from '@/types/menu';
import checkCircleIcon from '@/assets/supernovas-logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  // Add scroll event listener to toggle sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white dark:bg-dark transition-all duration-300 ${isSticky ? 'sticky top-0 z-50 shadow-md' : ''}`}>
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div className="w-60">
            <Link href="/" className="block">
              <Image
                src={checkCircleIcon}
                alt="supernovas-logo"
                width={80}
                height={40}
                className="dark:hidden"
              />
              <Image
                src={checkCircleIcon}
                alt="logo"
                width={120}
                height={40}
                className="hidden dark:block"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-between">
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden px-3 py-2 rounded-lg focus:ring-2 ring-primary ${open && 'navbarTogglerActive'}`}
            >
              <span className="block h-0.5 w-7 my-1 bg-body-color dark:bg-white"></span>
              <span className="block h-0.5 w-7 my-1 bg-body-color dark:bg-white"></span>
              <span className="block h-0.5 w-7 my-1 bg-body-color dark:bg-white"></span>
            </button>

            {/* Updated ul */}
            <ul className={`lg:flex ${open ? 'block' : 'hidden'} lg:static absolute right-4 bg-white dark:bg-dark-2 shadow-lg lg:shadow-none p-5 rounded-lg lg:p-0 lg:ml-[80px]`}>
              {menuItems.map((item: MenuItem, index) => (
                <li
                  key={item.label}
                  className="relative lg:ml-8 mb-4 lg:mb-0"
                  onMouseEnter={() => setActiveMenuIndex(index)}
                  onMouseLeave={() => setActiveMenuIndex(null)}
                >
                  {item.subMenu ? (
                    <>
                      <button className="text-base font-medium flex items-center dark:text-dark-6 dark:hover:text-white hover:text-primary transition-all duration-200">
                        {item.label}
                        <FiChevronDown className="ml-2" />
                      </button>

                      {/* Mega Menu */}
                      <div
                        className={`absolute left-0 top-full w-auto bg-white p-6 shadow-lg rounded-lg dark:bg-dark transition-all duration-300 ${
                          activeMenuIndex === index ? 'block' : 'hidden'
                        }`}
                      >
                        <div className="flex space-x-6 p-4">
                          {item.subMenu.map((sub, idx) => (
                            <div key={idx} className="group flex flex-col items-start space-y-2 px-4 py-2">
                              <div className="flex items-center space-x-2">
                                <Image
                                  src={sub.imageSrc}
                                  alt={sub.title}
                                  width={40}
                                  height={40}
                                  className="rounded-full"
                                />
                                <h4 className="text-sm font-semibold group-hover:text-primary dark:text-white transition-all duration-200">
                                  {sub.title}
                                </h4>
                              </div>
                              {sub.links.map((link, linkIdx) => (
                                <Link
                                  key={linkIdx}
                                  href={link.url}
                                  className="block text-base font-medium mb-2 hover:text-primary dark:text-dark-6 transition-all duration-200"
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>

                        {/* CTA Button at the End of Mega Menu */}
                        <div className="mt-6 text-center">
                          <Link
                            href="/cta-link"
                            className="inline-block w-full py-3 px-6 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-200"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href="/signin"
                      className="text-base font-medium px-4 py-2 hover:text-primary dark:text-dark-6 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login" className="text-base font-medium dark:text-white hover:text-primary transition-all duration-200">Login</Link>
              <Link href="/signup" className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-all duration-200">Sign Up</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
