"use client";

import { Navbar } from "./_components/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex dark:bg-[#1F1F1F]">
            <div className="h-[80px] fixed inset-y-0 w-full z-50">
                <Navbar />
            </div>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
