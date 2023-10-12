import { NavbarRoutes } from "@/app/(main)/_components/navbar-routes";

import { MobileSidebar } from "./mobile-sidebar";
import { BarChart, User, Layout, List, LucideIcon } from "lucide-react";

export type Route = {
    icon?: LucideIcon;
    label: string;
    href: string;
};
const guestRoutes: Route[] = [
    {
        label: "Events & Concerts",
        href: "/events-concerts",
    },
    {
        label: "Artists",
        href: "/artists",
    },
    {
        label: "Contact Us",
        href: "/contact-us",
    },
    {
        icon: User,
        label: "Sign In/ UP",
        href: "/auth",
    },
];

const privateRoutes: Route[] = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    },
];

const routes = true ? guestRoutes : privateRoutes;
export const Navbar = () => {
    return (
        <div className="p-4 h-full flex items-center ">
            <MobileSidebar routes={routes} />
            <NavbarRoutes routes={routes} />
        </div>
    );
};
