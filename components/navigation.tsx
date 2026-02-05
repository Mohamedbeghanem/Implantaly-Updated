"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from "@/hooks/use-translations"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslations()

  const navItems = [
    { href: "/", label: t("navigation.home") },
    { href: "/live-surgery", label: t("navigation.liveSurgery") },
    { href: "/features", label: t("navigation.services") },
    { href: "/about", label: t("navigation.about") },
    { href: "/contact", label: t("navigation.contact") },
  ]

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 bg-surface shadow-sm">
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primaryForeground text-lg font-semibold">
              ID
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold text-foreground">Implantaly</div>
              <div className="text-xs uppercase tracking-[0.35em] text-muted">Dental Clinic</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-semibold text-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <div className="flex items-center gap-2 rounded-full border border-border bg-surface2 px-3 py-1 text-xs font-semibold text-muted">
              <Phone className="h-4 w-4 text-primary" />
              <span>07 702 223 85</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primaryForeground shadow-sm transition hover:bg-primary/90"
            >
              {t("navigation.bookNow")}
            </Link>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface p-2 text-foreground transition hover:border-border/80 hover:text-accent lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-foreground/50" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primaryForeground text-base font-semibold">
                  ID
                </div>
                <div className="leading-tight">
                  <div className="text-base font-semibold text-foreground">Implantaly</div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-muted">Dental Clinic</div>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-border p-2 text-foreground transition hover:border-border/80 hover:text-accent"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-5 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-border px-4 py-3 text-base font-semibold text-foreground transition hover:border-primary/40 hover:bg-surface2 hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-border px-5 py-6">
              <div className="mb-4">
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primaryForeground shadow-sm transition hover:bg-primary/90"
              >
                {t("navigation.bookNow")}
              </Link>
              <div className="mt-4 text-center text-xs text-muted">
                Call us: +213 6661606706
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
