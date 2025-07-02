"use client"

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 440);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <footer
      id="contact"
      className="w-full px-6 py-12 md:pt-12 flex flex-col items-center text-[var(--bg-dark-blue)]">
      <div className="w-full max-w-xl text-center space-y-4">
        <div className="flex justify-center items-center gap-2">
          <FaPhoneSquareAlt />
          <span>(54) 99918-4796</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdEmail />
          <span>contato@alsadvocacia.adv.br</span>
        </div>
        <div className="flex justify-center items-start gap-2">
          <FaLocationDot className="mt-1" />
          <div>
            Avenida Júlio Borella, 1370, sala 303<br />
            Centro, Marau - RS<br />
            CEP: 99150-000
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs space-y-3">
        {isMobile ? (
           <>
            <div className="flex justify-center items-center gap-1 leading-tight">
              <FaCopyright/>
              <span>2025 ALS Advocacia</span>
            </div>
            <p>Todos os direitos reservados</p>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center gap-2 leading-relaxed">
              <FaCopyright/>
              <span className="whitespace-nowrap">
                2025 ALS Advocacia - Todos os direitos reservados
              </span>
            </div>  
          </>
        )}
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/manuela-antunes10"
            className="border-b border-current hover:border-b-2 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manuela Picoli Antunes
          </a>
        </p>
      </div>

    </footer>
  );
}