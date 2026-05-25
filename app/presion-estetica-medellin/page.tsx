export default function PresionEsteticaMedellin() {
  return (
    <div className="bg-neutral-950">
      <section className="max-w-3xl mx-auto px-6 py-20">

        <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">
          Artículo evergreen
        </p>

        <h1 className="font-display text-5xl sm:text-7xl text-white uppercase leading-none mb-10">
          ¿En Medellín todos visten igual? Presión estética, cultura urbana y juventud en la ciudad.
        </h1>

        <div className="flex flex-col gap-6 text-white/80 text-lg leading-relaxed">

          <p>
            La presión estética en Medellín se ha convertido en un fenómeno visible en los algoritmos de las redes sociales, las calles de la ciudad, los centros comerciales y la forma en cómo los jóvenes nos vestimos y consumimos en la ciudad. Aunque suele resumirse en la frase "todos visten igual", la situación es más compleja: involucra identidad, cultura urbana, turismo y economía simbólica.
          </p>

          <p>
            Medellín se ha convertido en un gran referente latinoamericano de música y moda urbana, dónde la consolidación de géneros como el Reguetón, Techno y Afrobeat, el auge del streetwear y la circulación constante de imágenes aspiracionales en plataformas digitales han contribuido a posicionar una estética dominante. Ciertos tipos de prendas, cuerpos y estilos visuales se reproducen en contenidos digitales, perfiles personales, vitrinas y publicidades, reforzando estereotipos de belleza y modelos de éxito.
          </p>

          <p>
            Más que un género musical popular, animador de fiestas y motivo de incontables TikToks, el Reguetón funciona como dispositivo cultural que legitima formas específicas de verse y habitar la ciudad. Las redes sociales amplifican estas referencias mediante algoritmos que premian lo visualmente atractivo y replicable, empezando a crear una imagen concreta y reconocible de "como se ve un joven de Medellín".
          </p>

          <p>
            Este fenómeno puede comprenderse a través del concepto de economía simbólica, desarrollado por la socióloga Sharon Zukin en su libro <span className="italic">The Culture of Cities</span>. Según Zukin, las ciudades se venden a través de imágenes, estilos de vida y narrativas que las hacen atractivas y consumibles. Y, tal como ella advierte, cuando un modelo cultural se vuelve dominante, "las ciudades se venden como diversas, pero en la práctica producen experiencias culturales muy parecidas".
          </p>

          <p>
            En Medellín, esta homogeneización no elimina la diversidad, pero sí puede excluirla de muchas maneras, pues jóvenes que no encajan en la estética dominante pueden enfrentar discriminación por su apariencia, gustos o comportamientos. También puede tener menor representación o limitadas opciones de consumo. Además, sostener ciertos estándares implica capacidad económica, lo que conecta la presión estética con desigualdad social y presiones económicas.
          </p>

          <p>
            ¿En Medellín todos visten igual? No. Pero sí existe un proceso de homogeneización impulsado por redes sociales, turismo e industrias creativas que influye en cómo los jóvenes construyen su identidad.
          </p>

        </div>

        {/* FAQs */}
        <div className="mt-16 flex flex-col gap-8">
          <h2 className="font-display text-3xl sm:text-4xl text-white uppercase">
            Preguntas frecuentes
          </h2>

          {[
            {
              q: "¿En Medellín todos se visten igual?",
              a: "No, aunque sí existe una estética dominante influida por la cultura urbana, el reguetón y las redes sociales. Los algoritmos y la industria de la moda refuerzan ciertos estilos, lo que puede generar la percepción de homogeneidad.",
            },
            {
              q: "¿Las redes sociales influyen en cómo se visten los jóvenes?",
              a: "Sí. Las redes sociales muestran constantemente tendencias, cuerpos y estilos aspiracionales. Esto puede influir en la forma en que los jóvenes construyen su identidad y aumentar la presión por encajar en determinados estándares estéticos.",
            },
            {
              q: "¿Qué es la presión estética y cómo afecta a los jóvenes?",
              a: "La presión estética es la expectativa social de cumplir con ciertos estándares de apariencia. Puede afectar la autoestima, el consumo y la forma en que los jóvenes se relacionan con su entorno, especialmente en ciudades donde la imagen tiene un peso cultural fuerte.",
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
