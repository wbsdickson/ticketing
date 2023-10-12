"use client";

import { Route } from "@/app/(main)/_components/navbar";
import { NavbarItem } from "./navbar-item";
import Image from "next/image";
import { User } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = ({ routes }: { routes: Route[] }) => {
    return (
        <>
            <div className="hidden md:flex   w-full justify-between  gap-x-2">
                <Link href="/">
                    <Image src="/logo.png" width={60} height={60} alt="logo" />
                </Link>
                <div className="flex">
                    {routes.map((route) => (
                        <NavbarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
                    ))}
                </div>
            </div>
            <div className="md:hidden block  ml-auto ">
                <User />
            </div>
        </>
    );
};
