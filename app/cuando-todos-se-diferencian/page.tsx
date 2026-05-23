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
          tienden a homogeneizar la imagen y el estilo.
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          Tal vez por eso cada vez son más comunes los videos, memes y
          comentarios que repiten la misma idea:
        </p>

        <PullQuote
          quote="En Medellín todos se visten igual."
          variant="red"
          size="lg"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Una frase que incluso Westcol ha repetido en sus redes, destacando
          que otras ciudades como Bogotá "nos llevan años luz en cuanto a
          estilo".
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Quizá ahí está la paradoja de una ciudad que convirtió la apariencia
          en un lenguaje social: que en el intento constante por encajar, muchos
          terminaron pareciéndose entre sí.
        </p>

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