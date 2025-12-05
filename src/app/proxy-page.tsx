// app/proxy-page.tsx
import { Suspense } from "react";
// import Loading from "./loading";

export const dynamic = "force-dynamic"; // penting!

export default async function ProxyPage() {
  const res = await fetch("https://sites.google.com/view/bpstw-diy/halaman-muka", {
    cache: "no-store",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    },
  });

  const html = await res.text();

  // Bersihkan tag yang bikin rusak layout
  const cleanedHtml = html
    .replace(/<head[^>]*>[\s\S]*?<\/head>/i, "") // hapus <head> Google Sites
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // hapus semua script
    .replace(/<link\b[^>]*>/gi, "") // hapus link CSS eksternal
    .replace(/<meta\b[^>]*>/gi, ""); // hapus meta

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="w-screen h-screen"
        dangerouslySetInnerHTML={{ __html: cleanedHtml }}
      />
    </Suspense>
  );
}

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Memuat situs resmi BPSTW DIY...</p>
      </div>
    </div>
  );
}