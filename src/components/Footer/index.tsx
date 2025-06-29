import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--bege)] w-full px-6 py-12 md:py-20 flex flex-col items-center text-[var(--azul-petroleo)]"
      style={{fontFamily: 'Garamond'}}
    >
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

      <div className="mt-12 text-center">
        <div className="flex justify-center items-center gap-2">
          <FaCopyright size={16}/>
          <span>2025 ALS Advocacia - Todos os direitos reservados</span>
        </div>
        <p className="mt-2">Desenvolvido por Manuela Picoli Antunes</p>
      </div>
    </footer>
  );
}
