'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  { code: 'zh-CN', name: '中文 (Chinese)', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'fr', name: 'Belgique (FR)', flag: '🇧🇪' },
  { code: 'nl', name: 'België (NL)', flag: '🇧🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
];

// Helper to set Google Translate cookie
function setGoogleTranslateCookie(langCode: string) {
  if (langCode === 'en') {
    document.cookie = `googtrans=/en/en; path=/;`;
    document.cookie = `googtrans=/auto/en; path=/;`;
  } else {
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/auto/${langCode}; path=/;`;
  }
}

export function Header() {
  const { isDark, toggleDark } = useDarkMode();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLangName, setCurrentLangName] = useState('Deutsch');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Helper function to trigger Google Translate dropdown
  const applyLanguage = (langCode: string) => {
    setGoogleTranslateCookie(langCode);

    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (!selectElem) return;

    const options = Array.from(selectElem.options);

    // Find matching option in Google Translate's select element
    let targetOption = options.find(
      (opt) => opt.value.toLowerCase() === langCode.toLowerCase()
    );

    // Google Translate uses value="" for the original English option when pageLanguage is 'en'
    if (!targetOption && (langCode === 'en' || langCode === 'auto')) {
      targetOption = options.find((opt) => opt.value === '' || opt.value === 'en') || options[0];
    }

    if (targetOption) {
      selectElem.value = targetOption.value;

      // Dispatch change and input events with bubbles: true so Google Translate reacts immediately
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
      selectElem.dispatchEvent(new Event('input', { bubbles: true }));

      // Backup trigger in case Google Translate widget was temporarily busy
      setTimeout(() => {
        if (selectElem.value !== targetOption?.value) {
          selectElem.value = targetOption.value;
          selectElem.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 50);
    }
  };

  // 1. Initialize Google Translate
  useEffect(() => {
    const savedLangCode = localStorage.getItem('selected_lang_code') || 'de';
    const savedLangName = localStorage.getItem('selected_lang_name') || 'Deutsch';
    setCurrentLangName(savedLangName);
    setGoogleTranslateCookie(savedLangCode);

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: false,
          },
          'google_translate_element'
        );

        // Wait until .goog-te-combo is fully populated with options
        let attempts = 0;
        const checkComboInterval = setInterval(() => {
          const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
          if (selectElem && selectElem.options.length > 1) {
            clearInterval(checkComboInterval);
            applyLanguage(savedLangCode);
          }
          attempts++;
          if (attempts > 30) clearInterval(checkComboInterval);
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
    } else {
      applyLanguage(savedLangCode);
    }
  }, []);

  // 2. Re-trigger translation when Next.js page/route changes
  useEffect(() => {
    if (!pathname) return;

    const timer = setTimeout(() => {
      const activeLangCode = localStorage.getItem('selected_lang_code') || 'de';
      applyLanguage(activeLangCode);
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Close dropdown menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string, langName: string) => {
    setCurrentLangName(langName);
    localStorage.setItem('selected_lang_code', langCode);
    localStorage.setItem('selected_lang_name', langName);
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

      {/* Hidden element for Google Translate initialization */}
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

            {/* Custom Language Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg py-1 z-50 max-h-[70vh] overflow-y-auto">
                {languages.map((lang, idx) => (
                  <button
                    key={`${lang.code}-${idx}`}
                    onClick={() => changeLanguage(lang.code, lang.name)}
                    className={`w-full text-left px-4 py-2 text-xs flex items-center gap-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                      currentLangName === lang.name
                        ? 'font-semibold text-brand bg-neutral-50 dark:bg-neutral-800/50'
                        : 'text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
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