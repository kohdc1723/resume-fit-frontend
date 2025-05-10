import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

import HomePage from "@/pages/HomePage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import ResumesPage from "@/pages/dashboard/ResumesPage";
import SignInAndSignUpLayout from "@/layouts/SignInAndSignUpLayout";
import RequireAuth from "@/auth/RequireAuth";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHomePage from "@/pages/dashboard/DashboardHomePage";
import CoverLettersPage from "@/pages/dashboard/CoverLettersPage";
import ApplicationsPage from "@/pages/dashboard/ApplicationsPage";
import AccountSettingsPage from "@/pages/dashboard/AccountSettingsPage";

export default function App() {
  const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!clerkPublishableKey) {
    throw new Error("Clerk publishable key is not set");
  }

  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      afterSignOutUrl="/"
    >
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route index element={<HomePage />} />
          <Route element={<SignInAndSignUpLayout />}>
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>
          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHomePage />} />
              <Route path="resumes" element={<ResumesPage />} />
              <Route path="cover-letters" element={<CoverLettersPage />} />
              <Route path="applications" element={<ApplicationsPage />} />
              <Route path="account-settings" element={<AccountSettingsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}
