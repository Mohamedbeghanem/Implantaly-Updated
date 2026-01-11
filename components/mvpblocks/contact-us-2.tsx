'use client';
import React from 'react';
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

export default function ContactUs2() {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    message: '',
    errors: {} as Record<string, string>,
    submitting: false,
    submitted: false,
  });

  const { t } = useTranslations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    // Console log only
    console.log('Form submitted:', {
      name: state.name,
      email: state.email,
      message: state.message,
    });

    setState({
      ...state,
      submitting: false,
      submitted: true,
    });
  };

  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-6xl items-start gap-10 rounded-3xl border border-green-200/70 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center rounded-full border border-green-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
              Contact
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="text-base text-gray-600">{t('contact.subtitle')}</p>
          </div>

          <div className="space-y-5 text-sm text-gray-600">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-green-200 bg-green-50">
                <Mail className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <p className="text-gray-500">
                  {t('contact.info.emailLabel') || 'Email to us at'}
                </p>
                <p className="text-base text-gray-900">subha9.5roy350@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-green-200 bg-green-50">
                <Phone className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <p className="text-gray-500">
                  {t('contact.info.phoneLabel') || 'Call us at'}
                </p>
                <p className="text-base text-gray-900">XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-green-200 bg-green-50">
                <MapPin className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <p className="text-gray-500">
                  {t('contact.info.locationLabel') || 'Location at'}
                </p>
                <p className="text-base text-gray-900">
                  Techno Main Salt Lake, Sector-V, Kolkata-700091
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-600">
              {t('contact.info.title') || 'Connect with Us'}
            </p>
            <div className="flex flex-wrap gap-3">
              {[Twitter, Facebook, Instagram, Github].map((Icon, index) => (
                <Link
                  key={index}
                  prefetch={false}
                  className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-green-200 bg-white transition hover:border-green-300 hover:bg-green-50"
                  href="#"
                >
                  <Icon className="h-5 w-5 text-gray-500 transition group-hover:text-green-700" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <form
          className="space-y-6 rounded-2xl border border-green-200 bg-white p-6 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-200"
              placeholder="Enter your name"
              name="name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              className="flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-200"
              name="email"
              required
            />
            {state.errors && state.errors.email && (
              <p className="text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="min-h-[120px] w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-200"
              id="message"
              placeholder="Enter your message"
              name="message"
            />
            {state.errors && (state.errors as any).message && (
              <p className="text-sm text-red-500">
                {(state.errors as any).message}
              </p>
            )}
          </div>

          <button
            className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-red-600 text-sm font-semibold text-white shadow-lg shadow-green-200 transition hover:from-green-700 hover:to-red-700"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Sending...' : 'Send message'}
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
