
export default function About() {
  return (
    <section
      id="about"
      className="py-20 min-h-screen"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start gap-12 h-full">
        <div className="w-full lg:w-1/2">
          <img
            src="/about.jpeg"
            alt="Foto da equipe de advocacia"
            className="rounded-xl w-full max-h-[600px] object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6 h-full">
          <div className="w-full max-w-xl text-gray-800 p-10 rounded-sm shadow-lg">
            <p className="text-lg mb-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt blandit odio pellentesque tincidunt. 
              Quisque porta imperdiet odio quis fermentum. Vivamus mattis semper sapien vitae laoreet. 
              Duis eget maximus ipsum. Mauris at tempor sapien. Nam in tempor nunc. Nulla pretium sapien neque.
            </p>
          </div>

          <div className="w-full max-w-xl text-gray-800 p-10 rounded-sm shadow-lg">
            <p className="text-lg mb-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt blandit odio pellentesque tincidunt. 
              Quisque porta imperdiet odio quis fermentum. Vivamus mattis semper sapien vitae laoreet. 
              Duis eget maximus ipsum. Mauris at tempor sapien. Nam in tempor nunc. Nulla pretium sapien neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
