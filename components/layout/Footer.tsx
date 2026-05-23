import Link from "next/link";
import { navLinks } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Título y créditos */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-white font-black text-2xl uppercase leading-tight">
              Encajar cuesta.
            </p>
            <p className="text-[#E63329] font-black text-2xl uppercase leading-tight mb-4">
              (En Medellín)
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Investigación periodística sobre moda, identidad y presión social
              en la juventud de Medellín. Por{" "}
              <span className="text-white/80 font-semibold">
                Jerónimo Hernández
              </span>
              .
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">
              Secciones
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#E63329] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-white/20 text-xs">
            Proyecto de grado — Comunicación Social
          </p>
          <p className="text-white/20 text-xs">
            Medellín, 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
