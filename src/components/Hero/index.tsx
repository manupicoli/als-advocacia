export default function Hero() {
    return(
        <section id="hero" className="relative h-[40vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                src="/banner.png"
                alt="Capa de início"
                className="w-full h-full object-cover object-center"
                />
            </div>
        </section>
    );
}