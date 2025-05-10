import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { navs } from "@/constants/navs";
import { useSideBarStore } from "@/stores/useSideBarStore";
import LogoReverse from "@/assets/resume-fit-logo-reverse.png";
import ClerkUserImage from "@/components/common/ClerkUserImage";

export default function SideNavBar() {
  const { isExpanded, toggleSideBar } = useSideBarStore();

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-dvh bg-prussian-blue text-white flex flex-col gap-4 p-4",
        isExpanded ? `w-[240px]` : `w-[72px]`
      )}
    >
      <div
        onClick={toggleSideBar}
        className="flex items-center gap-2 hover:cursor-pointer w-fit"
      >
        <img src={LogoReverse} alt="Resume Fit Logo" className="w-10 h-10" />
        {isExpanded && (
          <h1 className="text-2xl font-bold">Resume Fit</h1>
        )}
      </div>
      <Separator />
      <nav className="flex-1">
        <ul className="h-full flex flex-col gap-4">
          <div className="h-full flex flex-col gap-2">
            {navs.map(nav => (
              <li key={nav.label}>
                <Link
                  to={nav.to}
                  className="w-full"
                >
                  {isExpanded ? (
                    <div className="w-full flex items-center gap-2 rounded hover:bg-prussian-blue-light">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <nav.icon className="text-2xl" />
                      </div>
                      <p className="text-sm">{nav.label}</p>
                    </div>
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-prussian-blue-light">
                      <nav.icon className="text-2xl" />
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </div>
          <Separator />
          <li>
            <Link
              to="/dashboard/account-settings"
              className="w-full"
            >
              <div className="w-full flex items-center gap-2 rounded">
                <ClerkUserImage />
                {isExpanded && (
                  <p className="text-sm">Account Settings</p>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}