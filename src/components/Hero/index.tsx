export default function Hero() {
    return(
        <section
            id="hero"
            className="relative min-h-125 py-24 flex items-center justify-center"
            style={{ backgroundColor: 'var(--azul-petroleo)' }}
        >
            <div className="absolute inset-0 z-0">
                <img
                src="/hero-semfundo.png"
                alt="Capa de início"
                className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}