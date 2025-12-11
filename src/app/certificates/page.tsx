"use client";

import { CertificateCard } from '../../components/CertificateCard';
import { certificates } from '../../data/certificates';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function CertificatesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="container-grid py-10 sm:py-14 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h1 className="section-title">Certifications</h1>
        </div>
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.title} certificate={certificate} />
        ))}
      </section>
      <Footer />
    </main>
  );
}