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
        { url: "#sobre", label: "Sobre" },
        { url: "#areas", label: "Áreas de atuação" },
        { url: "#contato", label: "Contato"}
    ];

    const pathName = usePathname();

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header>
            <nav className="fixed top-0 left-0 w-full bg-[var(--bg-navbar)] backdrop-blur-md text-[var(--text-color)] flex justify-between items-center px-[5%] py-[10px] shadow-[0_15px_16px_-7px_rgba(0,0,0,0.1)] z-[90]">
                <Link href="/" className="h-auto flex items-center">
                    <img src="/logo.png" alt="Logo ALS Advocacia" className="h-[50px] w-[50px] min-w-[50px] object-contain shrink-0"/>
                </Link>
                
                <ul className={`${openMenu ? "flex" : "hidden"}
                    flex-col md:flex md:flex-row
                    gap-4 lg:gap-8 items-center list-none text-center
                    bg-[var(--bg-navbar)] md:bg-transparent z-40
                    absolute md:static top-[68px] md:top-auto left-0 md:left-auto 
                    w-full md:w-auto p-4 md:p-0 lg:ml-28`}>
                    {items.map((item, index) => (
                        <NavItem 
                            key={index} 
                            url={item.url} 
                            label={item.label}
                            isActive={pathName == item.url}/>
                    ))}
                </ul>

                <button
                    onClick={() => window.open('https://wa.me/555499184796', '_blank')}
                    className="hidden md:flex min-w-max rounded-[24px] px-[22px] py-[10px] cursor-pointer bg-green-600 border-none text-white flex items-center gap-2 text-base hover:bg-green-700 transition-all duration-300">
                    <FaWhatsapp size={20} />
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