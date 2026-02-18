export default function HeroSection({ title, subtitle, duration, image }) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4">
          Hokkaido Travel Magazine
        </p>
        <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/90 mb-6">
          {subtitle}
        </p>
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm tracking-wider border border-white/30">
          {duration}
        </span>
      </div>
    </section>
  )
}
