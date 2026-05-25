import Link from "next/link";
import PullQuote from "@/components/ui/PullQuote";
import MediaEmbed from "@/components/ui/MediaEmbed";

export default function Home() {
  return (
    <div className="bg-neutral-950">

      {/* HERO */}
      <section className="bg-[#E63329] px-6 py-10 sm:py-14 flex flex-col justify-center min-h-[40vh]">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-6">
            Investigación periodística — Jerónimo Hernández
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-tight">
            ¿Los cacorros usan Clemont?
            <br />
            Encajar cuesta en Medellín.
          </h1>
        </div>
      </section>

      {/* APERTURA */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          En los pasillos del Palacio Nacional, en el centro de Medellín, las
          camisetas de la marca Clemont empezaron a quedarse quietas.
        </p>

        <PullQuote
          quote="Antes traíamos una docena de camisetas y duraba una semana; ahora nos puede durar un mes o más."
          author="David Acevedo, vendedor de streetwear"
          variant="black"
          size="md"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-8 mb-8">
          También cuenta que quienes más han dejado de comprar son los jóvenes,
          quienes, palabras más, palabras menos, aseguran que no quieren comprar
          ropa de la marca Clemont porque es para cacorros.
        </p>

        {/* Video 1 */}
        <div className="max-w-sm mx-auto">
          <MediaEmbed
            src="/videos/video-1.mp4"
            type="video"
            aspect="portrait"
            caption="Vendedores del Palacio Nacional hablan sobre el impacto de la canción"
          />
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-6">
          Afuera, bajo el sol de agua de la calle Carabobo, en muchos equipos
          de sonido de casas, discotecas y barberías de Medellín sonaba una
          frase que había salido de una canción:
        </p>

        <PullQuote
          quote="Las valijas usan Nike y los cacorros usan Clemont."
          variant="red"
          size="lg"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-4">
          Era apenas una barra de trap. Pero en pocos días terminó convertida
          en memes, streams, burlas y conversaciones por toda Medellín.
        </p>

        {/* Capturas 1, 2 y 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-10">
          <MediaEmbed
            src="/images/captura.PNG"
            type="image"
            aspect="portrait"
            caption="Captura redes sociales"
          />
          <MediaEmbed
            src="/images/captura2.PNG"
            type="image"
            aspect="portrait"
            caption="Captura redes sociales"
          />
          <MediaEmbed
            src="/images/captura4.PNG"
            type="image"
            aspect="portrait"
            caption="Captura redes sociales"
          />
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
          Así lo explica Andrés Restrepo, e-commerce manager de la marca:{" "}
          <span className="text-white font-semibold">
            "Hubo un impacto: nos puso la marca en la conversación; mucha gente
            no la conocía."
          </span>
        </p>

        <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6 italic border-l-2 border-[#E63329] pl-4">
          "En Colombia sucede algo que no sucede en otro lado, y es el tema del
          meme; acá cualquier hecho se convierte en un meme."
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-8">
          La pregunta parecía absurda, pero empezó a perseguir a comerciantes,
          diseñadores y consumidores por igual:
        </p>
      </section>

      {/* PREGUNTA CENTRAL + LINK A SIGUIENTE SECCIÓN */}
      <section className="bg-[#E63329] px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white uppercase leading-tight mb-10">
            ¿Puede una canción dañar una marca?
          </h2>
          <Link
            href="/clemont-vs-krisr"
            className="inline-flex items-center gap-3 bg-white text-[#E63329] font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            Clemont vs Kris R
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* TARJETAS DE NAVEGACIÓN */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-8">
          Explorar el reportaje
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              href: "/clemont-vs-krisr",
              num: "01",
              title: "Clemont vs Kris R",
              desc: "¿Puede una canción dañar una marca?",
            },
            {
              href: "/vestirse-para-encajar",
              num: "02",
              title: "Vestirse para encajar",
              desc: "La presión invisible que moldea cómo nos vestimos.",
            },
            {
              href: "/palacio-nacional",
              num: "03",
              title: "El Palacio Nacional",
              desc: "Streetwear, reguetón y el lujo alcanzable.",
            },
            {
              href: "/cuando-todos-se-diferencian",
              num: "04",
              title: "Cuando todos se diferencian",
              desc: "La paradoja de una ciudad que se viste igual.",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group border border-white/10 p-6 hover:border-[#E63329] hover:bg-[#E63329]/5 transition-all duration-300"
            >
              <span className="font-display text-5xl text-white/10 group-hover:text-[#E63329]/30 transition-colors duration-300">
                {card.num}
              </span>
              <h3 className="font-display text-xl text-white uppercase mt-2 mb-2 group-hover:text-[#E63329] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}