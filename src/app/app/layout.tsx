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
  robots: "index, follow",
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
        {/* Favicon & Logo DIY */}
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
      <body>{children}</body>
    </html>
  );
}