import { Logo } from "./logo";
import { Route } from "./navbar";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = ({ routes }: { routes: Route[] }) => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes routes={routes} />
            </div>
        </div>
    );
};
