interface PullQuoteProps {
  quote: string;
  author?: string;
  variant?: "red" | "black" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function PullQuote({
  quote,
  author,
  variant = "red",
  size = "md",
}: PullQuoteProps) {
  const variantStyles = {
    red: "bg-[#E63329] text-white",
    black: "bg-black text-white",
    outline: "bg-transparent text-[#E63329] border-2 border-[#E63329]",
  };

  const sizeStyles = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl md:text-4xl",
    lg: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  };

  return (
    <blockquote
      className={`relative my-10 px-6 py-8 sm:px-10 sm:py-12 ${variantStyles[variant]}`}
    >
      {/* Comilla decorativa */}
      <span
        className="absolute top-2 left-4 text-7xl font-black leading-none opacity-20 select-none"
        aria-hidden="true"
      >
        "
      </span>

      <p
        className={`font-black uppercase leading-tight tracking-tight ${sizeStyles[size]}`}
      >
        "{quote}"
      </p>

      {author && (
        <footer className="mt-4">
          <span
            className={`text-sm font-semibold uppercase tracking-widest ${
              variant === "red" ? "text-white/70" : "text-white/50"
            }`}
          >
            — {author}
          </span>
        </footer>
      )}
    </blockquote>
  );
}
