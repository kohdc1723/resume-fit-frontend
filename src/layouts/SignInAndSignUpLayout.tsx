import { Outlet } from "react-router-dom";

export default function SignInAndSignUpLayout() {
  return (
    <div className="h-dvh flex justify-center items-center">
      <Outlet />
    </div>
  );
}