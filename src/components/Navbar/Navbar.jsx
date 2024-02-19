import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './data';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white header">
      {/* mobile nav  */}
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 lg:hidden">
            <span className="w-10">
              <img
                src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1707989183/jayraiweb/ebgaihyt77cngxge1inm.png"
                alt=""
              />
            </span>
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span className="w-10">
                        <img
                          src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1707989183/jayraiweb/ebgaihyt77cngxge1inm.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.slug}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <Link to={'/call'}>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-md bg-[#fd7e14] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Schedule a Call
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* desktop nav  */}
      <div className="container d-none d-md-block">
        <div className="header-wrapper d-flex justify-content-between align-items-center">
          <div className="logo border bg-[#2e2e2e] rounded-lg w-20">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1707989183/jayraiweb/ebgaihyt77cngxge1inm.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="header-menu-wrapper main-menu">
            <nav className="desktop-nav">
              <ul className="header-menu d-flex flex-row justify-content-center menu">
                {navItems.map((item, index) => (
                  <li className="px-2 px-lg-3" key={index}>
                    <Link className="menu-link" to={item.slug}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header-btn-wrapper">
            <Link className="btn orange-btn btn_effect" to="/call">
              <span className="z-1 position-relative">Schedule a Call</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
