"use client"

import Image from "next/image"

type BrandLogoVariant = "header" | "footer" | "small"

type BrandLogoProps = {
  alt?: string
  src?: string
  variant?: BrandLogoVariant
  scale?: number
  className?: string
  debug?: boolean
}

const VARIANT_STYLES: Record<BrandLogoVariant, { container: string; scale: number; sizes: string }> = {
  header: {
    container: "h-16 w-[220px] md:h-20 md:w-[260px]",
    scale: 1.95,
    sizes: "(min-width: 768px) 260px, 220px",
  },
  footer: {
    container: "h-16 w-[220px] md:w-[260px]",
    scale: 1.95,
    sizes: "(min-width: 768px) 260px, 220px",
  },
  small: {
    container: "h-14 w-[200px]",
    scale: 1.75,
    sizes: "200px",
  },
}

export function BrandLogo({
  alt = "Implantaly",
  src = "/partners/logo-Implantaly.png",
  variant = "header",
  scale,
  className,
  debug = false,
}: BrandLogoProps) {
  const styles = VARIANT_STYLES[variant]
  const appliedScale = scale ?? styles.scale

  return (
    <div
      className={[
        "relative overflow-hidden flex items-center",
        styles.container,
        debug ? "border border-red-500/50" : "",
        className ?? "",
      ]
        .join(" ")
        .trim()}
    >
      <div
        className="absolute inset-0"
        style={{ transform: `scale(${appliedScale})`, transformOrigin: "center" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={variant === "header"}
          className="object-contain"
          sizes={styles.sizes}
        />
      </div>
      {debug && (
        <>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-full w-px bg-red-500/40" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-red-500/40" />
          </div>
        </>
      )}
    </div>
  )
}
