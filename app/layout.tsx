import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Encajar cuesta (en Medellín)",
  description:
    "Investigación periodística sobre moda, identidad y presión social en la juventud de Medellín. Por Jerónimo Hernández.",
  openGraph: {
    title: "Encajar cuesta (en Medellín)",
    description:
      "¿Puede una canción dañar una marca? El caso Clemont vs Kris R y lo que revela sobre la moda, el reguetón y la presión social en Medellín.",
    locale: "es_CO",
    type: "article",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-white">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}