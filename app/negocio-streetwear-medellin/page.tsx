export default function NegocioStreetwearMedellin() {
  return (
    <div className="bg-neutral-950">
      <section className="max-w-3xl mx-auto px-6 py-20">

        <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">
          Artículo evergreen
        </p>

        <h1 className="font-display text-5xl sm:text-7xl text-white uppercase leading-none mb-10">
          El negocio de vestir a Medellín con gorra y cadena
        </h1>

        <div className="flex flex-col gap-6 text-white/80 text-lg leading-relaxed">

          <p>
            ¿Será casualidad que en Medellín se repitan, de calle en calle, las mismas pintas una y otra vez? Como en cualquier ciudad, el estilo, especialmente el juvenil, evoluciona al ritmo de los cambios urbanos. Sin embargo, llama la atención la homogeneidad de las estéticas que circulan entre redes sociales, videos musicales, transmisiones en vivo, centros comerciales y el comercio del centro.
          </p>

          <p>
            No es casualidad. Es un negocio que opera a través de equipos de sonido, algoritmos y vitrinas, donde casi todos ganan, excepto la diferencia: la construcción de una identidad propia y diversa.
          </p>

          <h2 className="font-display text-3xl text-white uppercase mt-4">
            Por qué el estilo juvenil en Medellín es cada vez más parecido
          </h2>

          <p>
            Según la Cámara de Comercio de Medellín para Antioquia, el sector de industrias creativas y culturales ha mostrado un crecimiento sostenido en la ciudad en los últimos años, consolidando a Medellín como uno de los principales polos de economía creativa del país.
          </p>

          <p>
            Al auge del reguetón como industria y fuerza simbólica, y al crecimiento del turismo, se ha sumado el posicionamiento de la moda local. En este contexto, el streetwear se ha instalado como referente dominante entre los jóvenes, impulsado por marcas que no solo venden ropa, sino una forma específica de verse y pertenecer.
          </p>

          <p>
            "En Medellín son muy influenciables, se visten como salgan vestidos Blessd o Westcol" comenta Jessica Rochet, comerciante del Centro Comercial Palacio Nacional al preguntarle por lo que más usan los jóvenes hoy en día. En la conversación, como infaltable, aparece Clemont, la marca fundada por el joven paisa Sebastián Echeverri que se ha convertido en una de las más conocidas y usadas, sin embargo, señala que "desde que salió la canción han bajado sus ventas".
          </p>

          <h2 className="font-display text-3xl text-white uppercase mt-4">
            Presión social y estética: por qué diferenciarse tiene costo
          </h2>

          <p>
            "Las valijas usan nike y los cacorros usan Clemont" canta Kristian Rangel, más conocido como Kris R, en la canción a la que se refiere Jessica. Esta se popularizó a finales del año pasado y causó una disputa entre dos de las marcas más famosas de streetwear en Medellín, pues Clemont señaló a Undergold estar detrás de esta campaña de desprestigio. También que la marca apareciera en la conversación pública, y como punto preocupante, que se creara un estigma ante las personas que usaban la marca, profundizando la discriminación y la homofobia.
          </p>

          <h2 className="font-display text-3xl text-white uppercase mt-4">
            El sistema detrás de la moda juvenil en Medellín
          </h2>

          <p>
            Este caso no es aislado. Es una muestra de cómo opera un sistema silencioso de presiones estéticas y económicas sobre los hombres jóvenes en Medellín.
          </p>

          <p>
            Por un lado, están las industrias culturales, que convierten ciertas estéticas en símbolos de éxito, aspiración y estatus, haciendo que la ropa deje de ser únicamente vestimenta para convertirse en un lenguaje de pertenencia. A esto se suman las marcas, que no solo responden a la demanda, sino que la moldean. A través de lanzamientos, colaboraciones y estrategias de posicionamiento, delimitan qué es deseable y qué no, estableciendo ciclos rápidos de validación y descarte.
          </p>

          <p>
            En medio de ambos operan las plataformas digitales. Los algoritmos no crean tendencias por sí solos, pero sí le dan más visibilidad a las que ya existen, pues priorizan lo que más se replica, lo que más interacción genera, lo que más se parece a lo que ya funcionó. El resultado es una estética que se repite porque es premiada por el sistema de visibilidad.
          </p>

          <h2 className="font-display text-3xl text-white uppercase mt-4">
            El reto de construir identidad en Medellín
          </h2>

          <p>
            Finalmente, están los jóvenes, que participan activamente (muchas veces sin ser conscientes de ello) en este circuito. Elegir qué ponerse no es una decisión tan simple o aislada como pensamos: está atravesada por la necesidad de encajar, de proyectar una identidad y de evitar la exclusión.
          </p>

          <p>
            Así, más que una suma de decisiones individuales, lo que se configura es un sistema de incentivos donde parecerse tiene recompensa y diferenciarse tiene costo. Y mientras el negocio sigue creciendo en ventas, en visibilidad y en influencia, la pregunta que queda abierta es qué espacio queda para la construcción de estilos propios en una ciudad donde vestirse también es una forma de negociar quién se es y a qué lugar se pertenece.
          </p>

        </div>

        {/* FAQs */}
        <div className="mt-16 flex flex-col gap-8">
          <h2 className="font-display text-3xl sm:text-4xl text-white uppercase">
            Preguntas frecuentes
          </h2>

          {[
            {
              q: "¿Por qué los jóvenes en Medellín se visten tan parecido?",
              a: "Porque las tendencias están fuertemente influenciadas por artistas, redes sociales y marcas. Los algoritmos amplifican ciertos estilos, y la presión social hace que muchos opten por lo que ya está validado.",
            },
            {
              q: "¿Qué relación tiene el reguetón con la moda en Medellín?",
              a: "El reguetón funciona como un motor cultural que posiciona estéticas específicas. Los artistas no solo marcan tendencias musicales, sino que también sus formas de vestir y comportarse comienzan a ser replicadas y asociadas al éxito y al estatus.",
            },
            {
              q: "¿Qué es el streetwear en Medellín?",
              a: "El streetwear es un estilo de ropa inspirado en la cultura urbana, que mezcla prendas cómodas como camisetas amplias, gorras, tenis y cadenas, con referencias a la música, el deporte y la vida en la calle. En Medellín, su importancia ha crecido porque está muy conectado con el auge del reguetón, los creadores de contenido y las marcas locales.",
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
    </div>
  );
}
