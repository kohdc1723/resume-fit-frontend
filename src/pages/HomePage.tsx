import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import logo from "@/assets/resume-fit-logo.png";

export default function HomePage() {
  return (
    <div>
      <header className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img src={logo} alt="resume-fit-logo" className="w-12 h-12" />
          <h1 className="text-3xl font-bold text-prussian-blue">Resume Fit</h1>
        </div>
        <div>

        </div>
        <SignedOut>
          <Button className="bg-prussian-blue hover:bg-prussian-blue/90 text-white">
            Sign In
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
}
