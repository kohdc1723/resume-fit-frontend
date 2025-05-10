import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export default function RequireAuth() {
  const { isLoaded, isSignedIn } = useAuth();

  if (isLoaded && !isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <Outlet />;
}
