"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Home() {
  const officialUrl = "https://sites.google.com/view/bpstw-diy/halaman-muka";

  return (
    <a href={officialUrl}>
      {/* Full screen, tanpa scroll */}
      <div className="fixed inset-0 flex flex-col bg-linear-to-b from-blue-50 to-white">

        {/* Bagian Atas – Logo + Judul (mengisi sekitar 60% layar) */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
          <Image
            src="/logo_pemda_diy.png"
            alt="Lambang Daerah Istimewa Yogyakarta"
            width={120}
            height={120}
            className="drop-shadow-xl mb-6"
            priority
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-tight">
            Balai Pelayanan Sosial<br />Tresna Werdha
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-3 text-center">
            BPSTW Abiyoso & Budi Luhur
          </h2>
          <p className="text-base text-gray-600 mt-2 text-center">
            Dinas Sosial Daerah Istimewa Yogyakarta
          </p>
          <p className="text-sm italic text-gray-500 mt-4">
            Gemati Migunani – Mengasihi dan Bermanfaat bagi Sesama
          </p>
        </div>

        {/* Bagian Bawah – Tombol besar (mengisi sekitar 40% layar) */}
        <div className="px-6 pb-10">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Situs Resmi BPSTW DIY
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Klik tombol di bawah ini untuk membuka situs resmi yang dikelola
                Dinas Sosial DIY.
              </p>

              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span>Buka Situs Resmi</span>
                <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-xs text-gray-500 mt-5 flex items-center justify-center gap-1">
                <ExternalLink className="w-4 h-4" />
                Membuka di tab baru
              </p>
            </div>
          </div>
        </div>

        {/* Footer tipis di paling bawah (tidak ikut scroll) */}
        <footer className="text-center text-xs text-gray-500 pb-4 px-4">
          © 2025 BPSTW Abiyoso & Budi Luhur — Dinas Sosial DIY
        </footer>
      </div>

      {/* SEO Helper */}
      <div className="sr-only">
        BPSTW Abiyoso, BPSTW Budi Luhur, Balai Pelayanan Sosial Tresna Werdha DIY,
        Panti Werdha Yogyakarta, Lansia Jogja, Dinas Sosial DIY
      </div>
    </a>
  );
}