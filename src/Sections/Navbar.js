import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../Details";
import logo from "../assets/ui/logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto max-width relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-6 text-green-text font-bold"> 
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      window.scrollTo({
                        top: target.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
          ))}
        </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-green-text font-bold">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;