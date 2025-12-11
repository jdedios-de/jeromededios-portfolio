"use client";

import {
  BuildingOfficeIcon,
  CalendarIcon,
  DocumentTextIcon,
  LinkIcon,
  ClipboardIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  filename: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    if (!certificate.link) return;

    try {
      await navigator.clipboard.writeText(certificate.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {certificate.title}
        </h3>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <BuildingOfficeIcon className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-xs uppercase text-gray-500">Issuer</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{certificate.issuer}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarIcon className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-xs uppercase text-gray-500">Date</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{certificate.date}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <DocumentTextIcon className="h-5 w-5 text-emerald-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs uppercase text-gray-500 mb-1">Description</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {certificate.description}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <TagIcon className="h-5 w-5 text-emerald-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs uppercase text-gray-500 mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {certificate.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {certificate.link && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <a
              href={certificate.link}
              download={certificate.filename}
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline flex items-center gap-1"
            >
              <LinkIcon className="h-4 w-4" />
              View Certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
}