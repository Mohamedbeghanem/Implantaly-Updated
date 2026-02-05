"use client";

import { useTranslations } from '@/hooks/use-translations';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { Locale } from '@/lib/translations';

const locales: Locale[] = ['en', 'fr', 'it'];

const languageNames = {
  en: 'English',
  fr: 'Français',
  it: 'Italiano'
};

const languageFlags = {
  en: '🇺🇸',
  fr: '🇫🇷',
  it: '🇮🇹'
};

export function LanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: Locale) => {
    changeLanguage(newLocale);

    // Strip any existing locale segment from the path to avoid /en/it/fr stacking
    const segments = (pathname || '/').split('/').filter(Boolean);
    while (segments.length > 0 && locales.includes(segments[0] as Locale)) {
      segments.shift();
    }
    const pathWithoutLocale = segments.length > 0 ? `/${segments.join('/')}` : '/';

    // Keep the same route; only switch i18n language
    setIsOpen(false);
    router.replace(pathWithoutLocale);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
        <span className="text-lg">{languageFlags[currentLanguage]}</span>
        <span className="hidden sm:inline">{languageNames[currentLanguage]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`cursor-pointer flex items-center gap-3 ${currentLanguage === lang ? 'bg-accent' : 'hover:bg-accent'}`}
          >
            <span className="text-lg">{languageFlags[lang]}</span>
            <span>{languageNames[lang]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
