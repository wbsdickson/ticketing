"use client";

import { Route } from "./navbar";
import { SidebarItem } from "./sidebar-item";

export const SidebarRoutes = ({ routes }: { routes: Route[] }) => {
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
            ))}
        </div>
    );
};
