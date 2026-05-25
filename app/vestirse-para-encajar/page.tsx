import Link from "next/link";
import PullQuote from "@/components/ui/PullQuote";
import MediaEmbed from "@/components/ui/MediaEmbed";

export default function VestirseParagEncajar() {
  return (
    <div className="bg-neutral-950">

      {/* HERO */}
      <section className="bg-[#E63329] px-6 py-10 sm:py-14 flex flex-col justify-center min-h-[40vh]">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-6">
            Capítulo 02
          </p>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl text-white uppercase leading-none">
            Vestirse
            <br />
            para encajar
          </h1>
          <p className="mt-6 text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
            La presión invisible que moldea cómo nos vestimos.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          Esta relación entre la ropa que nos ponemos y la imagen que queremos
          proyectar no es para nada nueva ni exclusiva de Medellín, al fin y al
          cabo:
        </p>

        <PullQuote
          quote="Nos vestimos en concordancia con lo que quisiéramos ser, no con lo que somos."
          author="Diana Lunareja, experta en comunicación y moda"
          variant="red"
          size="md"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          El problema aparece cuando eso que queremos ser no nace de un
          sentimiento genuino, ni de una construcción personal, sino de la
          repetición de tendencias en todos los medios que van instalando
          deseos y aspiraciones{" "}
          <a
            href="/presion-estetica-medellin"
            className="text-[#E63329] underline underline-offset-2 hover:text-white transition-colors duration-200"
          >
            inconscientemente
          </a>
          .
        </p>

        {/* Imágenes 1, 2 y 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-10">
          <MediaEmbed
            src="/images/imagen1.PNG"
            type="image"
            aspect="portrait"
            caption=""
          />
          <MediaEmbed
            src="/images/imagen2.PNG"
            type="image"
            aspect="portrait"
            caption=""
          />
          <MediaEmbed
            src="/images/imagen3.PNG"
            type="image"
            aspect="portrait"
            caption=""
          />
        </div>

        <PullQuote
          quote="Puede que vos no escuches la canción, o que nadie te diga directamente que compres cierta marca, pero si vos estás en un grupo de 5 amigos, y los 5 amigos empiezan a comprar cierta marca, vos de cierta manera te sentís presionado."
          author="Juan David Marín, consumidor de Clemont"
          variant="black"
          size="sm"
        />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Juan David empezó a usar la marca porque le pareció un diseño muy
          arriesgado y diferente a lo que se había visto en la ciudad. También
          señala que si en el mismo grupo de amigos empiezan a decir que tal
          marca es para cacorros, puede que esa persona ni conozca al artista,
          ni haya escuchado la canción, pero lo va a tomar como un hecho.
        </p>

        {/* Tweets */}
        <div className="flex flex-col gap-3 my-10">
          <img src="/images/tweet-1.jpeg" alt="Tweet" className="w-full object-contain" />
          <img src="/images/tweet-2.jpeg" alt="Tweet" className="w-full object-contain" />
          <img src="/images/tweet-3.jpeg" alt="Tweet" className="w-full object-contain" />
        </div>

        
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
            "Yo tengo muchos amigos que como que no tienen personalidad, que adoptan
            la personalidad según las modas comunes del momento, dejándose llevar de
            lo que dice la gente, las canciones", recuerda también que días después
            de salir la canción, fue a la universidad con una camiseta de la marca y
            fue tildado de <span className="italic">cacorro</span> en su grupo de
            amigos solo por llevarla puesta.
          </p>

        
          <PullQuote
            quote="A mí me parece una estupidez, me parece peor dejar de ponerse la ropa que a uno le gusta porque lo dijo un reguetonero, es cuestión de carácter."
            author="Juan David Marín"
            variant="outline"
            size="sm"
          />

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-8">
          Sin embargo, para algunos va más allá de tener carácter:
        </p>

        <PullQuote
          quote="Vivir en Medellín es sentir la constante presión por verte igual. Muchas personas se visten igual porque sienten que si se visten distinto, todo el mundo los va a voltear a ver."
          author="Sebastián Guzmán, comentario de TikTok"
          variant="red"
          size="md"
        />

        {/* Comentario */}
        <figure className="my-8 max-w-xs mx-auto">
          <img src="/images/comentario.PNG" alt="Comentario" className="w-full object-contain" />
          <figcaption className="mt-2 px-1 text-xs text-white/40 uppercase tracking-wider font-medium border-l-2 border-[#E63329] pl-3">
            Comentario viral sobre la presión por vestirse igual en Medellín
          </figcaption>
        </figure>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mt-10 mb-6">
          "En Medellín, a diferencia de muchas otras grandes ciudades, si vos te
          subís al metro con una pinta rara, te van a mirar raro", complementa
          Lunareja.
        </p>


          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
            El mismo Westcol, amigo cercano de Kris R, ha dicho en sus streams que,
            si bien tiene ropa Clemont, desde que salió esa canción ya no se la
            pone: "A mí me da cosita" cuenta el streamer compartiendo lo que muchos
            otros sintieron: un cuestionamiento a su virilidad masculina. Santiago
            también menciona esta <span className="italic">cosita</span>: "Cuando
            salió la canción y estaba muy reciente yo si me la dejé de poner por ahí
            un mesesito".
          </p>

          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
            Lunareja explica sobre esto que decirle cacorro a un hombre en Medellín se
            sigue considerando como una ofensa violenta porque se pone en duda esa
            masculinidad paisa hegemónica y por ello se siente como un cuestionamiento
            al valor como hombre.
          </p>

        <PullQuote
          quote="A mí me da cosita."
          author="Westcol, streamer"
          variant="black"
          size="lg"
        />

        {/* Video Westcol */}
        <div className="max-w-sm mx-auto my-10">
          <MediaEmbed
            src="/videos/westcol-no-se-pone-clemont.mp4"
            type="video"
            aspect="portrait"
            caption="Westcol habla sobre Clemont en stream"
          />
        </div>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
          Santiago también menciona esa{" "}
          <span className="text-white italic">cosita</span>: "Cuando salió la
          canción y estaba muy reciente yo si me la dejé de poner por ahí un
          mesesito."
        </p>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
          Esa presión por encajar no se queda solo en conversaciones de pasillo
          en las universidades, o en la fugacidad de streams o TikToks. En
          Medellín también se exhibe en vitrinas, maniquíes y logos, desde El
          Hueco hasta El Tesoro, desde Santa Cruz hasta Belén:
        </p>

        <PullQuote
          quote="La ciudad aprendió a vestirse como se ven sus artistas."
          variant="red"
          size="md"
        />

      </section>

      {/* LINK SIGUIENTE PÁGINA */}
      <section className="bg-[#E63329] px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl sm:text-7xl text-white uppercase leading-tight mb-10">
            Y pocos lugares muestran mejor esa transformación que el Palacio Nacional.
          </h2>
          <Link
            href="/palacio-nacional"
            className="inline-flex items-center gap-3 bg-white text-[#E63329] font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            El Palacio Nacional
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}