import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

import { navs } from "@/constants/navs";
import LogoReverse from "@/assets/resume-fit-logo-reverse.png";
import ClerkUserImage from "@/components/common/ClerkUserImage";


export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <aside className="z-[9999] w-full fixed top-0 h-[48px] bg-prussian-blue text-white flex items-center">
      <div className="relative w-full h-full px-6 flex items-center">
        <span
          onClick={toggleMenu}
          className="flex items-center justify-between cursor-pointer"
        >
          <CgMenu className="w-6 h-6" />
        </span>
        {isMenuOpen && (
          <nav className="absolute top-[48px] left-0 w-full h-[calc(100dvh-48px)] flex flex-col bg-prussian-blue px-4">
            <ul className="flex-1 border-y-[0.5px] border-white flex flex-col gap-2 py-4">
              {navs.map(nav => (
                <li key={nav.to}>
                  <Link
                    to={nav.to}
                    onClick={handleCloseMenu}
                    className="flex items-center gap-4 text-sm p-2 hover:bg-prussian-blue-light rounded"
                  >
                    <span className="w-6 h-6">
                      <nav.icon className="w-6 h-6" />
                    </span>
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between py-4 px-2">
              <div className="flex items-center gap-2">
                <img
                  src={LogoReverse}
                  alt="resume-fit-logo"
                  className="w-10 h-10"
                />
                <h1 className="font-bold text-2xl">Resume Fit</h1>
              </div>
              <Link
                to="/dashboard/account-settings"
                onClick={handleCloseMenu}
              >
                <ClerkUserImage />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </aside>
  );
}