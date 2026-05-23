interface MediaEmbedProps {
  src: string;
  caption?: string;
  type?: "image" | "video";
  aspect?: "square" | "portrait" | "landscape" | "wide";
  priority?: boolean;
}

export default function MediaEmbed({
  src,
  caption,
  type = "image",
  aspect = "landscape",
  priority = false,
}: MediaEmbedProps) {
  const aspectStyles = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-video",
  };

  return (
    <figure className="my-8 w-full">
      <div
        className={`relative w-full overflow-hidden bg-black/20 ${aspectStyles[aspect]}`}
      >
        {type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={caption || ""}
            className="absolute inset-0 w-full h-full object-cover"
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <video
            src={src}
            controls
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label={caption || "Video"}
          />
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 px-1 text-xs text-white/40 uppercase tracking-wider font-medium border-l-2 border-[#E63329] pl-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
