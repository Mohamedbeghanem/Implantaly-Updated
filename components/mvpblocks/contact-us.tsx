'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from '@/hooks/use-translations';
import { useFormSubmit } from '@/src/hooks/useFormSubmit';

export default function ContactUs2() {
  const { t } = useTranslations();
  const pathname = usePathname();
  const { submit, isLoading, isSuccess, isError, error } = useFormSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const ok = await submit({
      type: 'formSubmission',
      data: {
        formId: 'contact',
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        message: String(formData.get('message') || '').trim(),
        pagePath: pathname,
        source: 'website',
        company: String(formData.get('company') || '').trim(),
      },
    });
    if (ok) {
      form.reset();
    }
  };

  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-6xl items-start gap-10 rounded-3xl border border-border bg-surface/80 p-6 shadow-sm backdrop-blur sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center rounded-full border border-border bg-surface2 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Contact
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="text-base text-muted">{t('contact.subtitle')}</p>
          </div>

          <div className="space-y-5 text-sm text-muted">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface2">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-muted">
                  {t('contact.info.emailLabel') || 'Email to us at'}
                </p>
                <p className="text-base text-foreground">subha9.5roy350@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface2">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-muted">
                  {t('contact.info.phoneLabel') || 'Call us at'}
                </p>
                <p className="text-base text-foreground">XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-muted">
                  {t('contact.info.locationLabel') || 'Location at'}
                </p>
                <p className="text-base text-foreground">
                  Techno Main Salt Lake, Sector-V, Kolkata-700091
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-muted">
              {t('contact.info.title') || 'Connect with Us'}
            </p>
            <div className="flex flex-wrap gap-3">
              {[Twitter, Facebook, Instagram, Github].map((Icon, index) => (
                <Link
                  key={index}
                  prefetch={false}
                  className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface transition hover:border-primary/40 hover:bg-surface2"
                  href="#"
                >
                  <Icon className="h-5 w-5 text-muted transition group-hover:text-accent" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <form
          className="space-y-6 rounded-2xl border border-border bg-surface p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              {t('contact.form.name')}
            </label>
            <input
              id="name"
              type="text"
              required
              className="flex h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              placeholder={t('contact.form.namePlaceholder')}
              name="name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              {t('contact.form.email')}
            </label>
            <input
              id="email"
              placeholder={t('contact.form.emailPlaceholder')}
              type="email"
              className="flex h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              name="email"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              {t('contact.form.phone')}
            </label>
            <input
              id="phone"
              placeholder={t('contact.form.phonePlaceholder')}
              type="tel"
              className="flex h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              name="phone"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              {t('contact.form.message')}
            </label>
            <textarea
              className="min-h-[120px] w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              id="message"
              placeholder={t('contact.form.messagePlaceholder')}
              name="message"
              required
            />
          </div>

          <button
            className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? t('contact.form.sending') : t('contact.form.send')}
            <Send className="h-4 w-4" />
          </button>
          {isSuccess ? (
            <p className="text-sm text-foreground">{t('contact.form.success')}</p>
          ) : null}
          {isError ? (
            <p className="text-sm text-destructive">{error}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

