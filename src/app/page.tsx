"use client";

import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Header SUPER KECIL – hanya di pojok kiri atas */}
      <div className="fixed top-0 left-0 z-50 flex items-center gap-3 p-3 bg-white/90 backdrop-blur-sm shadow-sm">
        <Image
          src="https://upload.wikimedia.org/wikipedia/id/8/8e/Coat_of_arms_of_Yogyakarta.svg"
          alt="Lambang DIY"
          width={36}
          height={36}
          className="drop-shadow"
          priority
        />
        <div className="text-left">
          <p className="text-xs font-semibold text-gray-800 leading-none">
            BPSTW Abiyoso & Budi Luhur
          </p>
          <p className="text-[10px] text-gray-600 leading-none">
            Dinas Sosial DIY
          </p>
        </div>
      </div>

      {/* Loading indicator (muncul sebentar saat iframe load) */}
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50 z-40 pointer-events-none">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-sm text-gray-600">Memuat situs resmi...</p>
        </div>
      </div>

      {/* IFRAME FULL LAYAR 100% */}
      <iframe
        src="https://sites.google.com/view/bpstw-diy/halaman-muka"
        className="fixed top-0 left-0 w-screen h-screen border-0"
        allowFullScreen
        loading="lazy"
        title="Situs Resmi BPSTW DIY"
        onLoad={() => {
          // Hilangkan loading setelah iframe selesai load
          const loading = document.querySelector(".fixed.inset-0.flex");
          loading?.classList.add("opacity-0", "pointer-events-none");
          setTimeout(() => loading?.remove(), 500);
        }}
      />

      {/* SEO Helper – tetap terbaca Google */}
      <div className="sr-only">
        BPSTW Abiyoso, BPSTW Budi Luhur, Balai Pelayanan Sosial Tresna Werdha DIY,
        Panti Werdha Yogyakarta, Lansia Jogja, Tresna Werdha Abiyoso, Tresna Werdha Budi Luhur,
        Dinas Sosial Daerah Istimewa Yogyakarta
      </div>
    </>
  );
}