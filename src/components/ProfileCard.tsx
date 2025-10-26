"use client";

import { profile } from '../data/Profile';
import { MapPinIcon, EnvelopeIcon, BriefcaseIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export function ProfileCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    if (profile.email) {
      try {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    }
  };

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="card p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200">
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
          <p className="text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">Location</p>
        </div>
        <p className="mt-2 font-medium text-neutral-900 dark:text-neutral-100">{profile.location || 'Not specified'}</p>
      </div>
      <div className="card p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200">
        <div className="flex items-center space-x-2">
          <EnvelopeIcon className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
          <p className="text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">Email</p>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <a
            className="font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 break-all max-w-[80%]"
            href={`mailto:${profile.email || ''}`}
            title={profile.email || 'No email provided'}
            aria-label={`Email ${profile.email || 'not available'}`}
          >
            {profile.email || 'Not specified'}
          </a>
          {profile.email && (
            <div className="flex items-center space-x-1">
              <button
                onClick={handleCopyEmail}
                className="text-green-600 dark:text-green-400 hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Copy email to clipboard"
                title={copied ? 'Copied!' : 'Copy email'}
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
      <div className="card p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200">
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
          <p className="text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">Looking for</p>
        </div>
        <p className="mt-2 font-medium text-neutral-900 dark:text-neutral-100">{profile.lookingFor || 'Not specified'}</p>
      </div>
    </div>
  );
}