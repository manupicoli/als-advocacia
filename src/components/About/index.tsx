import AboutItem from "../AboutItem";

export default function About() {
  return (
    <section id="sobre" className="py-12 min-h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12 h-full">
        <div className="w-full lg:w-1/2">
          <img
            src="/about.png"
            alt="Foto da equipe de advocacia"
            className="rounded-xl w-full max-w-lg object-contain mx-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-12 h-full">
          <AboutItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt blandit odio pellentesque tincidunt. 
              Quisque porta imperdiet odio quis fermentum. Vivamus mattis semper sapien vitae laoreet."/>
          
          <AboutItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt blandit odio pellentesque tincidunt. 
              Quisque porta imperdiet odio quis fermentum. Vivamus mattis semper sapien vitae laoreet."/>
        </div>
      </div>
    </section>
  );
}