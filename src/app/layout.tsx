// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "BPSTW Abiyoso & Budi Luhur | Balai Pelayanan Sosial Tresna Werdha Dinas Sosial DIY",
  description:
    "Balai Pelayanan Sosial Tresna Werdha (BPSTW) Abiyoso dan Budi Luhur Unit Pelaksana Teknis Daerah Dinas Sosial Daerah Istimewa Yogyakarta. Pelayanan sosial lanjut usia terpadu.",
  keywords:
    "BPSTW, Balai Pelayanan Sosial Tresna Werdha, BPSTW Abiyoso, BPSTW Budi Luhur, Tresna Werdha Yogyakarta, panti werdha jogja, dinas sosial diy, lansia yogyakarta",
  authors: [{ name: "Dinas Sosial DIY" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "BPSTW Abiyoso & Budi Luhur - Dinas Sosial DIY",
    description:
      "Informasi resmi Balai Pelayanan Sosial Tresna Werdha Abiyoso dan Budi Luhur Yogyakarta",
    url: "https://bpstw-diy.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* 1. SATU-SATUNYA meta verifikasi yang boleh di atas script GTM */}
        <meta
          name="google-site-verification"
          content="e-VGsoeLajcHRG_6JGV9AQ8j7vVh9Y8C0-cUJ21YChc"
        />

        {/* 2. SCRIPT GTM HARUS LANGSUNG DI BAWAH META DI ATAS – TIDAK BOLEH ADA YANG LAIN DI ANTARANYA */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5FDV67KT');
            `,
          }}
        />

        {/* Semua meta dan link lainnya baru boleh di bawah ini */}
        <meta
          name="google-site-verification"
          content="KQOW1tX3nVa1H6blSl9UKaY2RIUSZugTN-ebugd-XG8"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/id/8/8e/Coat_of_arms_of_Yogyakarta.svg"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="https://upload.wikimedia.org/wikipedia/id/8/8e/Coat_of_arms_of_Yogyakarta.svg"
        />
      </head>

      <body>
        {/* Noscript harus tetap anak pertama di body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FDV67KT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}