// app/api/proxy/route.ts
import { NextResponse } from "next/server";

const GOOGLE_SITES_URL =
  "https://sites.google.com/view/bpstw-diy/halaman-muka";

export async function GET() {
  try {
    const res = await fetch(GOOGLE_SITES_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
    });

    let html = await res.text();

    // === RAPIIKAN HTML DARI GOOGLE SITES ===
    html = html
      // Hapus <head> + semua script biar tidak bentrok
      .replace(/<head[^>]*>[\s\S]*?<\/head>/i, '<head></head>')
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, "")

      // Hapus header & footer Google Sites (yang fixed)
      .replace(/<div[^>]*class="[^"]*yDmH0d[^"]*"[\s\S]*?<\/div>/gi, "") // banner atas
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "")
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")

      // Hapus tombol "Report abuse", "Skip to main", dll
      .replace(/<div[^>]*class="[^"]*dZA9kd[^"]*"[\s\S]*?<\/div>/gi, "")
      .replace(/<div[^>]*role="button"[^>]*>Skip to[^<]*<\/div>/gi, "")

      // Ganti <body> jadi <div> supaya tidak nested body
      .replace(/<body[^>]*>/i, '<div class="google-sites-body">')
      .replace(/<\/body>/i, "</div>")
      .replace(/<\/html>/i, "");

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        // Penting: biar iframe bisa load
        "X-Frame-Options": "ALLOWALL",
        "Content-Security-Policy": "frame-ancestors *;",
      },
    });
  } catch {
    return new NextResponse("Error loading site", { status: 500 });
  }
}

export const dynamic = "force-dynamic";