"use client";

import { profile } from '../data/profile';
import { UserIcon, CodeBracketIcon, PhoneIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export function ContactCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async () => {
    if (profile.phoneNumber) {
      try {
        await navigator.clipboard.writeText(profile.phoneNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy phone number:', err);
      }
    }
  };

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="card p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200">
        <div className="flex items-center space-x-2">
          <UserIcon className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
          <p className="text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">LinkedIn</p>
        </div>
        <a
          className="mt-2 font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 truncate max-w-[80%]"
          href={profile.linkedin || '#'}
          title={profile.linkedin || 'No LinkedIn provided'}
          aria-label={`LinkedIn ${profile.linkedin || 'not available'}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.linkedin ? 'View Profile' : 'Not specified'}
        </a>
      </div>
      <div className="card p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200">
        <div className="flex items-center space-x-2">
          <CodeBracketIcon className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
          <p className="text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">GitHub</p>
        </div>
        <a
          className="mt-2 font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 truncate max-w-[80%]"
          href={profile.github || '#'}
          title={profile.github || 'No GitHub provided'}
          aria-label={`GitHub ${profile.github || 'not available'}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.github ? 'View Profile' : 'Not specified'}
        </a>
      </div>
      <div className="card p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200">
        <div className="flex items-center space-x-2">
          <PhoneIcon className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
          <p className="text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">Phone Number</p>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <a
            className="font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 truncate max-w-[80%]"
            href={`tel:${profile.phoneNumber || ''}`}
            title={profile.phoneNumber || 'No phone number provided'}
            aria-label={`Phone number ${profile.phoneNumber || 'not available'}`}
          >
            {profile.phoneNumber || 'Not specified'}
          </a>
          {profile.phoneNumber && (
            <div className="flex items-center space-x-1">
              <button
                onClick={handleCopyPhone}
                className="text-green-600 dark:text-green-400 hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Copy phone number to clipboard"
                title={copied ? 'Copied!' : 'Copy phone number'}
              >
                <ClipboardIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {copied && (
                <span className="text-sm text-green-600 dark:text-green-400 animate-fade-in">
                  Copied!
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}