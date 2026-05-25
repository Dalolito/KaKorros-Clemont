import Link from "next/link";
import PullQuote from "@/components/ui/PullQuote";
import MediaEmbed from "@/components/ui/MediaEmbed";

export default function ClemonVsKrisR() {
  return (
    <div className="bg-neutral-950">

      {/* HERO */}
      <section className="bg-[#E63329] px-6 py-10 sm:py-14 flex flex-col justify-center min-h-[40vh]">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-6">
            Capítulo 01
          </p>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl text-white uppercase leading-none">
            Clemont
            <br />
            vs Kris R
          </h1>
          <p className="mt-6 text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
            ¿Puede una canción dañar una marca?
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">

        {/* Imagen Kris R vs Sebastian */}
        <div className="grid grid-cols-2 gap-3 mb-12">
          <MediaEmbed
            src="/images/kris-r.jpg"
            type="image"
            aspect="portrait"
            caption="Kris R"
          />
          <MediaEmbed
            src="/images/sebastian-echeverri.jpg"
            type="image"
            aspect="portrait"
            caption="Sebastián Echeverri, creador de Clemont"
          />
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          El 26 de septiembre del año pasado el artista Kris R lanzó{" "}
          <span className="italic">Los cacorros usan Kleimond</span>,
          una canción que originalmente no se iba a llamar así, pero debido al
          revuelo que causó un preview de la canción en la que aparecía la
          famosa frase, Kris R decidió rebautizarla.
        </p>

        {/* Portada tema */}
        <div className="max-w-xs mx-auto">
          <MediaEmbed
            src="/images/portada-tema.jpg"
            type="image"
            aspect="square"
            caption="Portada de Los cacorros usan Kleimond — Kris R"
          />
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Durante varios meses hubo silencio por parte de Kristian Rangel,
          compositor y cantante de la canción, ampliamente conocido en la
          ciudad como Kris R, respecto a por qué había hecho esa mención en
          su canción, incluso después de que Sebastián Echeverri, creador de
          Clemont, reaccionara con un comunicado en el que culpaba a Undergold,
          una marca competidora en el segmento de streetwear y moda juvenil,
          de haberle pagado al artista para que dijera eso en su canción.
        </p>

        {/* Comunicado */}
        <div className="border border-white/10 bg-white/5 p-6 sm:p-8 my-10">
          <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">
            Comunicado — Clemont
          </p>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            "Qué triste ver a una marca colombiana (UNGLD) que por miedo a la
            competencia tenga que pagarle a artistas emergentes para atacarnos.
            Señores, la competencia es sana y esto no se trata de quien hable
            más, esto se mide es trabajando, creciendo y creando empresa."
          </p>
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          Tanto él como la marca lo negaron, y el tema no pasó a instancias
          legales, en gran parte porque Kris R se cuidó de no mencionar el
          nombre exacto de la marca en el título y cambiarlo por{" "}
          <span className="italic">Kleimond</span>.
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
          "Ya una camiseta de Clemont vale como 3 millones de pesos, con esa plata
          me compro Undergold" cuenta Alejandro Sierra, estudiante de la
          Universidad Luis Amigó y consumidor de ambas marcas, confirmando que hay
          cierta rivalidad implícita entre ellas, también cuenta que{" "}
          <span className="font-bold">
            "desde el tema de la K, no he vuelto a comprar nada Clemont"
          </span>{" "}
          acompañado de una sonrisita pícara que se repite en muchas personas al
          preguntarle por el tema.
        </p>
        
        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-6">
          A Kris R se le ha visto en muchas ocasiones vistiendo ropa de Undergold,
          lo que aumentaba las sospechas de que lo denunciado por Echeverri fuera
          real, incluso ya había cantado una barra en la que decía "Desde que uso
          Undergold, ¿Quién putas usa Monastery?" mostrando su preferencia por
          esta y lanzando una puya a otra marca colombiana. Sin embargo, según
          Andrés Calle, coordinador de marca de Undergold, "Undergold nunca tuvo
          nada que ver, siempre hizo las cosas bien y, por eso mismo, nunca tuvo
          que salir a dar declaraciones".
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-6">
          Lo cierto es que el impacto ya estaba causado. Los TikToks y memes
          se multiplicaron:
        </p>

        {/* Capturas */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 my-10">
          <div className="max-w-xs mx-auto">
            <img src="/images/captura3.PNG" alt="Reacción redes sociales" className="w-full object-contain" />
          </div>
          <div className="max-w-xs mx-auto">
            <img src="/images/captura5.PNG" alt="Reacción redes sociales" className="w-full object-contain" />
          </div>
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
          "Unos hacen el chiste, pero igual se la llevan", cuenta Sara,
          vendedora en el sector El Hueco. Al entrar a la tienda y preguntar
          por Clemont, le dice que no hay. Sin embargo, hay varias exhibidas.
        </p>

        <PullQuote
          quote="Ah, es que no hemos vuelto a traer; uno es precavido porque sabe que la gente se deja llevar de esas cosas."
          author="Sara, vendedora, El Hueco"
          variant="red"
          size="md"
        />

        <figure className="my-8 max-w-sm mx-auto">
          <img src="/images/directo.png" alt="Directo" className="w-full object-contain" />
          <figcaption className="mt-2 px-1 text-xs text-white/40 uppercase tracking-wider font-medium border-l-2 border-[#E63329] pl-3">
            Kris R en stream con Westcol
          </figcaption>
        </figure>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-6">
          "No, no sé, y si los afectó pues discúlpenme" respondió entre risas
          Kris R en un stream con Westcol a principios de este año, cuando este
          le preguntó si aquella canción pudo haber afectado a la marca.
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
          En el stream explicó que una persona de su equipo de trabajo, a quien
          consideraba cercano, era embajador de Clemont. Tiempo después esa
          persona "hizo vueltas que no iban" y se terminó la relación.
        </p>

        <PullQuote
          quote="A mí esa ropa no me gustó, yo se la regalé al celador de mi unidad."
          author="Kris R"
          variant="black"
          size="md"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-6">
          "Con esa persona que trabajaba conmigo, tuve un problema, y a los días
          vi vistiendo gente con la que yo no me llevaba, y yo tiré la barra."
          Así resume su motivación para mencionar la marca en la canción, que a
          día de hoy suma más de{" "}
          <span className="text-white font-semibold">
            35 millones de reproducciones
          </span>{" "}
          en todas las plataformas.
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
          Kristian nació en Nueva York, pero se crio en Medellín, donde terminó
          convirtiéndose en una de las figuras más visibles del trap colombiano.
          En una ciudad atravesada por el auge del reguetón y los códigos
          callejeros, artistas como Kris R dejaron de ser únicamente referentes
          musicales: también empezaron a marcar qué se veía "duro", qué daba
          estatus y qué valía la pena ponerse.
        </p>

      </section>

      {/* LINK SIGUIENTE PÁGINA */}
      <section className="bg-[#E63329] px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl sm:text-7xl text-white uppercase leading-tight mb-10">
            ¿Pero por qué nos importa tanto lo que nos ponemos?
          </h2>
          <Link
            href="/vestirse-para-encajar"
            className="inline-flex items-center gap-3 bg-white text-[#E63329] font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            Vestirse para encajar
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}