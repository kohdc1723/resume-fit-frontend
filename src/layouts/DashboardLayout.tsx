import { useMediaQuery } from "usehooks-ts";
import { Outlet } from "react-router-dom";

import SideNavBar from "@/components/layouts/dashboard-layout/SideNavBar";
import TopNavBar from "@/components/layouts/dashboard-layout/TopNavBar";
import { useSideBarStore } from "@/stores/useSideBarStore";
import { cn } from "@/lib/utils";

export default function DashboardLayout() {
  const isAboveLarge = useMediaQuery("(min-width: 1024px)");
  const { isExpanded } = useSideBarStore();

  return (
    <>
      {isAboveLarge ? <SideNavBar /> : <TopNavBar />}
      <main
        className={cn(
          "p-8 min-h-dvh",
          isAboveLarge
            ? isExpanded ? "ml-[240px]" : "ml-[72px]"
            : "mt-[48px] min-h-[calc(100dvh-48px)]"
        )}
      >
        <Outlet />
      </main>
    </>
  );
}