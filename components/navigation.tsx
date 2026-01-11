"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/live-surgery", label: "Live Surgery" },
    { href: "/workshops", label: "Workshops" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-200/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/Altaacademy.svg"
              alt="Alta Academy"
              width={520}
              height={180}
              priority
              className="block h-20 w-auto max-w-[360px] object-contain sm:h-24 sm:max-w-[420px] lg:h-28 lg:max-w-[480px]"
              sizes="(max-width: 640px) 360px, (max-width: 1024px) 420px, 480px"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-semibold text-gray-700 transition-colors hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600">
              <Phone className="h-4 w-4 text-emerald-500" />
              <span>+213 6661606706</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              Book Consultation
            </Link>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-gray-700 transition hover:border-gray-300 hover:text-gray-900 lg:hidden"
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
          <div className="fixed inset-0 z-40 bg-black/60" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <Image
                  src="/Altaacademy.svg"
                  alt="Alta Academy"
                  width={420}
                  height={160}
                  className="block h-16 w-auto max-w-[280px] object-contain"
                  sizes="280px"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-gray-200 p-2 text-gray-700 transition hover:border-gray-300 hover:text-gray-900"
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
                  className="rounded-2xl border border-gray-100 px-4 py-3 text-base font-semibold text-gray-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-gray-200 px-5 py-6">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Book Consultation
              </Link>
              <div className="mt-4 text-center text-xs text-gray-500">
                Call us: +213 6661606706
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
