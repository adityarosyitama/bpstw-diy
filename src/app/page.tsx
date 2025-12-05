"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Langsung redirect ke situs resmi BPSTW DIY
    window.location.replace(
      "https://sites.google.com/view/bpstw-diy/halaman-muka"
    );
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        {/* Logo DIY */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/id/8/8e/Coat_of_arms_of_Yogyakarta.svg"
          alt="Lambang Daerah Istimewa Yogyakarta"
          width={120}
          height={120}
          className="mx-auto"
        />

        <h1 className="text-3xl font-bold text-gray-800">
          Balai Pelayanan Sosial Tresna Werdha
        </h1>
        <h2 className="text-2xl text-gray-700">
          BPSTW Abiyoso & Budi Luhur
        </h2>
        <p className="text-lg text-gray-600">
          Dinas Sosial Daerah Istimewa Yogyakarta
        </p>

        <div className="mt-8">
          <p className="text-gray-600">Mengalihkan ke situs resmi...</p>
          <div className="mt-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </div>

        {/* Teks tambahan untuk crawler Google */}
        <div className="mt-12 max-w-2xl text-sm text-gray-500 space-y-2 hidden">
          <p>
            BPSTW Abiyoso dan BPSTW Budi Luhur adalah unit pelaksana teknis
            Dinas Sosial DIY yang memberikan layanan sosial bagi lanjut usia.
          </p>
          <p>
            Kata kunci: BPSTW, Balai Pelayanan Sosial Tresna Werdha, BPSTW
            Abiyoso, BPSTW Budi Luhur, panti werdha yogyakarta, tresna werdha
            diy, lansia jogja.
          </p>
        </div>
      </div>
    </main>
  );
}