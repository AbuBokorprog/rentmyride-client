import React, { useState, useRef, useEffect } from "react";
import MenuSidebar from "./MenuSidebar";

const Navbar = () => {
  const [isOpenDashboard, setIsOpenDashboard] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenDashboard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/", current: true },
    { name: "Bikes", href: "/bikes", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "#", current: false },
  ];

  return (
    <div>
      <nav className="bg-white border-secondary-200 dark:bg-secondary-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              RentMyRide
            </span>
          </a>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpenDashboard(!isOpenDashboard)}
                type="button"
                className="flex text-sm bg-secondary-800 rounded-full md:me-0 focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-600"
                id="user-menu-button"
                aria-expanded={isOpenDashboard}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="/api/placeholder/32/32"
                  alt="user photo"
                />
              </button>

              {isOpenDashboard && (
                <div className="absolute right-0 z-50 mt-2 w-48 text-base list-none bg-white divide-y divide-secondary-100 rounded-lg shadow dark:bg-secondary-700 dark:divide-secondary-600">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-secondary-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm text-secondary-500 truncate dark:text-secondary-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    {["Dashboard", "Settings", "Earnings", "Sign out"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-white"
                          >
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary-500 rounded-lg md:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-200 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:focus:ring-secondary-600 ml-2"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-row font-medium p-0 space-x-8 rtl:space-x-reverse mt-0 border-0 bg-white dark:bg-secondary-900">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 ${
                      item.current
                        ? "text-primary-700 dark:text-primary-500"
                        : "text-secondary-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                    }`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MenuSidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </div>
  );
};

export default Navbar;
