"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

type NavbarItemProps = {
    icon?: LucideIcon;
    label: string;
    href: string;
};

export const NavbarItem = ({ icon: Icon, label, href }: NavbarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    };

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn("flex items-center gap-x-2 text-slate-500 text-sm font-[500] px-4 transition-all ")}
        >
            <div className={cn("flex items-start py-4 ", Icon && "gap-x-2")}>
                {Icon && <Icon size={22} className={cn("text-slate-500", isActive && "text-sky-700")} />}
                <div className="flex flex-col uppercase text-base font-bold">
                    {label}
                    {href && (
                        <div
                            className={cn(
                                "transition-width duration-300 ease-in-out mt-2",
                                isActive ? "w-1/2 border-pink-400" : "w-0 border-transparent",
                                "border-2 border-solid"
                            )}
                        />
                    )}
                </div>
            </div>
        </button>
    );
};
