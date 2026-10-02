'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Listens to route changes
import { profile } from '../data/profile';
import { useDarkMode } from './DarkModeProvider';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
];

// Helper to set Google Translate cookie
function setGoogleTranslateCookie(langCode: string) {
  document.cookie = `googtrans=/en/${langCode}; path=/;`;
  // Also set for domain if subdomains exist
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname};`;
}

export function Header() {
  const { isDark, toggleDark } = useDarkMode();
  const pathname = usePathname(); // Detects Next.js page changes
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('de');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Apply language change to Google Translate element
  const applyLanguage = (langCode: string) => {
    setGoogleTranslateCookie(langCode);

    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event('change'));
    }
  };

  // 1. Initialize Google Translate
  useEffect(() => {
    // Check if user previously selected a language, default to 'de'
    const savedLang = localStorage.getItem('selected_lang') || 'de';
    setCurrentLang(savedLang);
    setGoogleTranslateCookie(savedLang);

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: false,
          },
          'google_translate_element'
        );

        // Apply language on load
        const initInterval = setInterval(() => {
          const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
          if (selectElem) {
            selectElem.value = savedLang;
            selectElem.dispatchEvent(new Event('change'));
            clearInterval(initInterval);
          }
        }, 100);
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // 2. Re-trigger translation when Next.js navigates to a new page
  useEffect(() => {
    if (!pathname) return;

    // Small delay to let React render the new page's DOM elements first
    const timer = setTimeout(() => {
      const activeLang = localStorage.getItem('selected_lang') || 'de';
      applyLanguage(activeLang);
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    localStorage.setItem('selected_lang', langCode);
    setIsOpen(false);
    applyLanguage(langCode);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/50 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md">
      <style>{`
        body { top: 0 !important; }
        .goog-te-banner-frame, .skiptranslate, #goog-gt-tt, #google_translate_element {
          display: none !important;
        }
      `}</style>

      {/* Hidden element for script init */}
      <div id="google_translate_element" aria-hidden="true" />

      <div className="container-grid py-3 sm:py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" width={28} height={28} alt="Logo" priority />
          <span className="font-semibold notranslate" translate="no">
            {profile.name}
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href={profile.resumeUrl} className="hover:underline">Experience</Link>
          <Link href="/certificates" className="hover:underline">Certificates</Link>

          {/* Globe Button + Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center"
              aria-label="Select Language"
              title="Change Language"
            >
              <svg
                className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </button>

            {/* Custom Language Options Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-xs flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                      currentLang === lang.code
                        ? 'font-semibold text-brand bg-neutral-50 dark:bg-neutral-800/50'
                        : 'text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}