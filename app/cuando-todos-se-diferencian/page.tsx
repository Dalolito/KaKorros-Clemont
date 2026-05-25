import Link from "next/link";
import PullQuote from "@/components/ui/PullQuote";

export default function CuandoTodosSeDiferencian() {
  return (
    <div className="bg-neutral-950">

      {/* HERO */}
      <section className="bg-[#E63329] px-6 py-10 sm:py-14 flex flex-col justify-center min-h-[40vh]">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-6">
            Capítulo 04
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white uppercase leading-none">
            Cuando todos intentan
            <br />
            diferenciarse…
          </h1>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          En un mercado atravesado por tendencias fugaces, las marcas pueden
          crecer, o desgastarse, con la misma velocidad con la que circulan los
          memes y los TikToks.
        </p>

        <PullQuote
          quote="Coger un producto machete y vendérselo a la gente por todos lados."
          author="Andrés Restrepo, e-commerce manager, Clemont"
          variant="black"
          size="md"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Pero esa misma velocidad también parece haber producido una
          contradicción: mientras todos intentan diferenciarse, cada vez más
          personas terminan viéndose parecido. En Medellín, donde durante años
          la ropa funcionó como una manera de mostrar éxito, calle, personalidad
          o aspiración, las tendencias empiezan a repetirse con tanta frecuencia
          que vestirse distinto puede convertirse en un riesgo social.
        </p>

        <PullQuote
          quote="Hoy el fenómeno es: no quiero ser NPC."
          author="Andrés Restrepo"
          variant="red"
          size="lg"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Usando un término tomado de los videojuegos para referirse a esos
          personajes genéricos que no tienen control sobre su propia historia,
          Restrepo señala que eso ha impulsado el auge de marcas más limpias y
          estilos menos saturados, especialmente entre hombres jóvenes que
          intentan escapar de verse "como todos los demás".
        </p>

        <PullQuote
          quote="Ya los artistas no solo muestran cómo se ven en un video musical o en un concierto, sino que construyen una narrativa permanente de su vida."
          author="Diana Lunareja"
          variant="outline"
          size="sm"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Lunareja, en cambio, cree que la lógica de las redes sociales apunta
          hacia otro lado. En un entorno cada vez más globalizado y algorítmico,
          las tendencias no solo se replican más rápido, sino que también
          tienden a homogeneizar la imagen y el estilo. Tal vez por eso cada vez
          son más comunes los videos, memes y comentarios que repiten la misma
          idea: "en Medellín todos se visten igual", una frase que incluso
          Westcol ha repetido en sus redes, destacando que otras ciudades como
          Bogotá "nos llevan años luz en cuanto a estilo".
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          Quizá ahí está la paradoja de una ciudad que convirtió la apariencia
          en un lenguaje social: que, en el intento constante por encajar, muchos
          terminaron pareciéndose entre sí.
        </p>

      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="max-w-3xl mx-auto px-6 pb-16 sm:pb-24">
        <h2 className="font-display text-4xl sm:text-5xl text-white uppercase mb-10">
          Algunas preguntas que deja esta historia
        </h2>

        <div className="flex flex-col gap-8">
          {[
            {
              q: "¿Qué pasó entre Kris R y Clemont?",
              a: "La polémica comenzó después de que Kris R incluyera la frase \"Las valijas usan Nike y los cacorros usan Clemont\" en una canción lanzada en 2024. La barra se viralizó rápidamente en redes sociales, streams y memes, provocando conversaciones sobre masculinidad, moda urbana y presión social en Medellín.",
            },
            {
              q: "¿Por qué una canción pudo afectar la percepción de una marca?",
              a: "En Medellín, artistas urbanos, streamers y creadores de contenido se han convertido en referentes de estilo y estatus para muchos jóvenes. Cuando una marca aparece asociada a burlas, memes o cuestionamientos simbólicos, su valor social también puede verse afectado.",
            },
            {
              q: "¿Qué relación tiene el reguetón con la forma de vestir en Medellín?",
              a: "Durante los últimos años, el reguetón y la música urbana ayudaron a popularizar ciertas estéticas asociadas al lujo, el streetwear y la aspiración social. Muchos jóvenes empezaron a encontrar en artistas locales referentes sobre cómo vestir, qué marcas usar y qué proyectar a través de la ropa.",
            },
            {
              q: "¿Por qué tantas personas dicen que \"en Medellín todos se visten igual\"?",
              a: "Diversos expertos y consumidores entrevistados coinciden en que las redes sociales y las tendencias digitales aceleraron la repetición de ciertos estilos, marcas y siluetas. En una ciudad donde la apariencia tiene un fuerte valor simbólico, vestirse diferente puede sentirse como un riesgo social para algunos jóvenes.",
            },
            {
              q: "¿Qué significa \"NPC\" y por qué aparece en esta conversación?",
              a: "\"NPC\" es un término tomado de los videojuegos para referirse a personajes genéricos que no tienen decisiones propias dentro de la historia. En redes sociales comenzó a usarse para describir personas que se ven o actúan igual que los demás, especialmente dentro de tendencias estéticas muy repetidas.",
            },
            {
              q: "¿Qué muestra este caso sobre Medellín?",
              a: "Más allá de una polémica entre artistas y marcas, el caso refleja cómo la música, las redes sociales y el consumo comenzaron a influir en la construcción de identidad, aspiración y pertenencia entre muchos jóvenes de Medellín.",
            },
          ].map((item, i) => (
            <div key={i} className="border-t border-white/10 pt-6">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-3">
                {item.q}
              </h3>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-[#E63329] px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl sm:text-7xl text-white uppercase leading-tight mb-10">
            Encajar cuesta.
            <br />
            (En Medellín)
          </h2>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-white text-[#E63329] font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            Volver al inicio
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}