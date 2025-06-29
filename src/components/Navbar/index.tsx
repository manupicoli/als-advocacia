"use client";

import Link from "next/link";
import NavItem, { NavItemInterface } from "../NavItem";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
    const items: NavItemInterface[] = [
        { url: "#hero", label: "Início"},
        { url: "#about", label: "Sobre" },
        { url: "#areas", label: "Áreas de atuação" },
        { url: "#contact", label: "Contato"}
    ];

    const pathName = usePathname();

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header>
            <nav className="fixed top-0 left-0 w-full bg-[var(--azul-navbar)] backdrop-blur-md text-[var(--bege)] flex justify-between items-center px-[5%] py-[10px] shadow-[0_15px_16px_-7px_rgba(0,0,0,0.1)] z-[90]">
                <Link href="/">
                    <img src="/logo.png" alt="Logo ALS Advocacia" width={50} height={50} className="h-full object-cover"/>
                </Link>
                
                <ul className={`${openMenu ? "flex" : "hidden"}
                    flex-col md:flex md:flex-row 
                    gap-8 items-center list-none text-center
                    bg-[var(--azul-navbar)] md:bg-transparent z-40
                    absolute md:static top-[68px] md:top-auto left-0 md:left-auto w-full md:w-auto p-4 md:p-0`}>
                    {items.map((item, index) => (
                        <NavItem 
                            key={index} 
                            url={item.url} 
                            label={item.label}
                            isActive={pathName == item.url}/>
                    ))}
                </ul>

                <button className="hidden md:flex rounded-[24px] px-[22px] py-[10px] cursor-pointer bg-green-600 border-none text-white flex items-center gap-2 text-base hover:bg-green-700 transition-all duration-300">
                    <FaWhatsapp size={20}/>
                    Entre em contato
                </button>

                <button className="block md:hidden bg-transparent text-xl cursor-pointer border-none text-white" 
                    onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? <FaXmark/> : <FaBars/>}
                </button>
            </nav>
      </header>
    );
}

export default Navbar;