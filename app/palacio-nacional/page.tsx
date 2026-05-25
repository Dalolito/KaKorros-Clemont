import Link from "next/link";
import PullQuote from "@/components/ui/PullQuote";
import MediaEmbed from "@/components/ui/MediaEmbed";

export default function PalacioNacional() {
  return (
    <div className="bg-neutral-950">

      {/* HERO */}
      <section className="bg-[#E63329] px-6 py-10 sm:py-14 flex flex-col justify-center min-h-[40vh]">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-6">
            Capítulo 03
          </p>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl text-white uppercase leading-none">
            El Palacio
            <br />
            Nacional
          </h1>
          <p className="mt-6 text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
            Streetwear, reguetón y el lujo alcanzable.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          El Palacio Nacional siempre ha buscado proyectar prestigio. En un
          principio sus mármoles, cúpulas y ornamentos daban la impresión de
          que aquel gigante grisáceo era una construcción europea colocada por
          arte de magia en el centro de Medellín; ahora, este edificio está
          lleno de locales comerciales, en cuyas vitrinas cuelgan, entre otras
          cosas, réplicas de Amiri, Givenchy, Hugo Boss y demás marcas de lujo
          europeas — una versión de lujo alcanzable para el medellinense de a
          pie.
        </p>

        {/* Video 3 */}
        <div className="max-w-sm mx-auto">
          <MediaEmbed
            src="/videos/video-3.mp4"
            type="video"
            aspect="portrait"
            caption="El Palacio Nacional, centro de Medellín"
          />
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          El segundo piso ofrece una pausa: jeans más clásicos, camisetas con
          pocos colores y menos ruido. Allí domina la llamada "ropa urbana",
          que en Medellín no significa exactamente lo mismo que el streetwear.
        </p>

        <PullQuote
          quote="La ropa urbana está ligada al hip hop y el streetwear más al reguetón."
          author="Brayan Bello, comerciante"
          variant="black"
          size="md"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Aunque ambas nacieron de la relación entre las músicas urbanas y la
          moda en Estados Unidos a inicios de los 2000, en Medellín esa estética
          terminó encontrando en figuras como Feid, Ryan Castro o Maluma nuevos
          referentes de éxito y aspiración.
        </p>

        <PullQuote
          quote="Los reguetoneros vieron sobre todo en el streetwear una forma de mostrar lujo pero también calle."
          author="Diana Lunareja, experta en comunicación y moda"
          variant="red"
          size="md"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Así empezó una relación simbiótica que ha posicionado a la industria
          musical y textil como dos grandes motores de la transformación social
          que vive Medellín.
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          "Ellos han sido esos actores que se encargan de reflejar lo que ocurre a
          nivel local y eso es algo muy bacano porque permite a toda la industria
          crecer", cuenta Andrés Calle sobre Undergold. "Nosotros hacemos un
          esfuerzo muy grande en vestir a los artistas de forma muy orgánica, eso
          nos permite conectar con las comunidades que ellos tienen".
        </p>

        {/* Tienda Undergold */}
        <figure className="my-8 max-w-sm mx-auto">
          <img src="/images/tienda-undergold.jpg" alt="Tienda Undergold" className="w-full object-contain" />
          <figcaption className="mt-2 px-1 text-xs text-white/40 uppercase tracking-wider font-medium border-l-2 border-[#E63329] pl-3">
            Tienda Undergold
          </figcaption>
        </figure>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Calle recuerda que, en ese momento, la gente ya estaba buscando ese tipo
          de siluetas y estéticas, pero todavía no podía conseguirlas fácilmente
          en Medellín porque el mercado era tímido frente a esas propuestas.
          "Tenemos que ser los que pongan esa vara", dice sobre el inicio de
          Undergold y sobre una idea que ha atravesado gran parte de estas marcas:
          la aspiración de convertirse en una mejor versión de sí mismo.
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          En una ciudad donde los artistas se convirtieron en referentes de
          estilo, una canción podía hacer mucho más que sonar en discotecas:
          también podía redefinir el valor simbólico de una marca.
        </p>

        <PullQuote
          quote="No era la primera vez que ocurría en Medellín. Pero antes había sucedido al revés."
          variant="red"
          size="md"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Se trata de Monastery, la canción de Ryan Castro y Feid lanzada a
          finales de 2021. El tema acumuló cientos de millones de
          reproducciones, sonó en discotecas, carros y fiestas de toda la
          ciudad, y terminó posicionando a Monastery en el imaginario colectivo
          como una marca de lujo y estatus.
        </p>

        {/* Video 4 Monastery */}
        <div className="max-w-sm mx-auto">
          <MediaEmbed
            src="/videos/video-4-monastery.mp4"
            type="video"
            aspect="portrait"
            caption="Monastery — Ryan Castro y Feid"
          />
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Estos artistas siempre conservaron parte del ADN visual del hip hop:
          las cadenas, las gorras, las siluetas oversize y la relación entre
          música, calle y apariencia. Pero en Medellín esa estética terminó
          evolucionando hacia algo más comercial y aspiracional.
        </p>

        <PullQuote
          quote="La forma en la que usamos esa moda sigue siendo muy comercial, no es contestataria. Es una cosa muy fácil de acomodar a diferentes estratos, barrios y edades."
          author="Diana Lunareja"
          variant="black"
          size="sm"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Tury, conocido artísticamente como "El nene de Pedregal", creció
          viendo en la música urbana una promesa de ascenso social: vestir
          marcas exclusivas, montar motos de alto cilindraje y vivir de sus
          canciones.
        </p>

        <PullQuote
          quote="Yo no uso feka, manito, mira esta suela."
          author="Tury, El nene de Pedregal"
          variant="red"
          size="lg"
        />

        {/* Colaboración Tury */}
        <div className="max-w-sm mx-auto">
          <MediaEmbed
            src="/images/colaboración_tury.jpg"
            type="image"
            aspect="portrait"
            caption="Tury en colaboración con Blessd, Ryan Castro y Kris R"
          />
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Tury, conocido artísticamente como "El nene de Pedregal", creció viendo
          en la música urbana una promesa de ascenso social: vestir marcas
          exclusivas, montar motos de alto cilindraje y vivir de sus canciones.
          Años después terminó compartiendo canciones con artistas como Blessd,
          Ryan Castro y Kris R. <span className="font-bold">"Yo no uso feka, manito, mira esta suela"</span>
          , canta en una de sus colaboraciones, reivindicando la autenticidad y el
          lujo como símbolos de estatus dentro de esa estética.
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Así como una generación de reguetoneros creció admirando figuras
          estadounidenses como 50 Cent o Snoop Dogg, muchos jóvenes de Medellín
          comenzaron a encontrar en los artistas locales una nueva imagen
          aspiracional.
        </p>

        <PullQuote
          quote="El aspiracional del pelado del barrio era verse así."
          author="Andrés Restrepo, e-commerce manager, Clemont"
          variant="outline"
          size="md"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-6">
          Esa lógica también ha transformado la forma en que muchos jóvenes
          consumen.
        </p>

        <PullQuote
          quote="Eso ha permeado mucho a los pelados, que prefieren gastar endeudándose, usando tarjeta de crédito, muchas veces desmedidamente."
          author="Andrés Restrepo"
          variant="black"
          size="sm"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-6">
          Poco a poco,{" "}
          <a
            href="/negocio-streetwear-medellin"
            className="text-[#E63329] underline underline-offset-2 hover:text-white transition-colors duration-200"
          >
            Medellín empezó a fabricar su propia versión del estatus.
          </a>
          {" "}Marcas como Clemont, Undergold, Saint Theory, Blow Up o Monastery
          crecieron en medio de un ecosistema de emprendimientos locales que
          entendió el valor aspiracional de la ropa urbana y lo mezcló con el
          alcance del reguetón y las redes sociales.
        </p>

        {/* Video Hueco */}
        <div className="max-w-sm mx-auto">
          <MediaEmbed
            src="/videos/video-2.mp4"
            type="video"
            aspect="portrait"
            caption="El Hueco, centro comercial popular de Medellín"
          />
        </div>

        <PullQuote
          quote="Se desarrolló un ecosistema de muchos emprendedores que le apostaron al tema de hacer marcas."
          author="Andrés Restrepo"
          variant="red"
          size="md"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-6">
          Las redes sociales terminaron acelerando todavía más esa dinámica.
        </p>

        <PullQuote
          quote="Ya los artistas no solo muestran cómo se ven en un video musical o en un concierto, sino que construyen una narrativa permanente de su vida."
          author="Diana Lunareja"
          variant="outline"
          size="sm"
        />

      </section>

      {/* LINK SIGUIENTE PÁGINA */}
      <section className="bg-[#E63329] px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl sm:text-7xl text-white uppercase leading-tight mb-10">
            Pero mientras todos intentan diferenciarse...
          </h2>
          <Link
            href="/cuando-todos-se-diferencian"
            className="inline-flex items-center gap-3 bg-white text-[#E63329] font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            Cuando todos se diferencian
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}