import { GoLaw } from "react-icons/go";
import { MdFamilyRestroom } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import AreaItem from "../AreaItem";

export default function Areas() {
  return (
    <section
      id="areas"
      className="relative min-h-200 py-24 flex items-center justify-center"
      style={{ backgroundColor: 'var(--azul-petroleo)' }}
    >
      <div className="absolute z-0">
        <img
          src="/areas.png"
          alt="Fundo áreas"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Conheça nossas áreas de atuação:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <AreaItem title="Cível"/>
          <AreaItem title="Famílias e sucessões"/>
          <AreaItem title="Trabalhista"/>
          <AreaItem title="Previdenciário"/>
        </div>
      </div>
    </section>
  );
}
