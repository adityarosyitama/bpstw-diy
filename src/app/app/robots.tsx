export default function Robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://bpstw-diy.vercel.app/sitemap.xml",
  };
}