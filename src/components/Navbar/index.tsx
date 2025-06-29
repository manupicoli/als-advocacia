"use client";

import Image from "next/image";
import Link from "next/link";
import NavItem, { NavItemInterface } from "../NavItem";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./index.css"
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
    const items: NavItemInterface[] = [
        { url: "#hero", label: "Início"},
        { url: "#about", label: "Sobre" },
        { url: "#areas", label: "Áreas de atuação" },
    ];

    const pathName = usePathname();

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header>
            <nav className="navbar">
                <Link href="/" className="logo">
                    <Image src="/logo.png" alt="Logo ALS Advocacia" width={200} height={200}/>
                </Link>
                
                <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                    {items.map((item, index) => (
                        <NavItem 
                            key={index} 
                            url={item.url} 
                            label={item.label}
                            isActive={pathName == item.url}/>
                    ))}
                </ul>

                <button className="btn-default flex items-center gap-2">
                    <FaWhatsapp />
                    Entre em contato
                </button>


                <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <FaXmark/> : <FaBars/>}
                </button>
            </nav>
      </header>
    );
}

export default Navbar;