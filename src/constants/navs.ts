import { CgHome, CgViewList, CgFile, CgFileDocument } from "react-icons/cg";
import type { IconType } from "react-icons/lib";

interface Nav {
  label: string;
  to: string;
  icon: IconType;
}

export const navs: Nav[] = [
  {
    label: "Home",
    to: "/dashboard",
    icon: CgHome,
  },
  {
    label: "Resumes",
    to: "/dashboard/resumes",
    icon: CgFileDocument,
  },
  {
    label: "Cover Letters",
    to: "/dashboard/cover-letters",
    icon: CgFile,
  },
  {
    label: "Applications",
    to: "/dashboard/applications",
    icon: CgViewList,
  },
];