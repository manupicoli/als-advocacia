import AreaItem from "../AreaItem";

export default function Areas() {
  return (
    <section
      id="areas"
      className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/areas.png"
          alt="Fundo áreas"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Conheça nossas áreas de atuação:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <AreaItem title="Cível"/>
          <AreaItem title="Trabalhista"/>
          <AreaItem title="Previdenciário"/>
          <AreaItem title="Famílias e sucessões"/>
        </div>
      </div>
    </section>
  );
}
