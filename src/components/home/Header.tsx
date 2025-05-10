import { Link } from "react-router-dom";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import logo from "@/assets/resume-fit-logo.png";
import { userButtonCustomAppearance } from "@/styles/userButtonCustomAppearance";

export default function Header() {
  return (
    <header className="sticky top-0 h-20 w-full bg-white flex items-center justify-between px-8 border-b border-slate-200">
      <div className="flex items-center gap-2">
        <img src={logo} alt="resume-fit-logo" className="w-12 h-12" />
        <h1 className="text-3xl font-bold text-prussian-blue">Resume Fit</h1>
      </div>
      <div>
        <ClerkLoading>
          <Skeleton className="h-10 w-10 rounded-full" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <Link to="/signin">
              <Button className="bg-prussian-blue hover:bg-prussian-blue/90 text-white h-10">
                Sign In
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={userButtonCustomAppearance} />
          </SignedIn>
        </ClerkLoaded>
      </div>
    </header>
  );
}
