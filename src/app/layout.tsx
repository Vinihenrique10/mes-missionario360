import type { Metadata } from "next";
import { Cinzel, Geist } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "optional",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Funil de Ofertas Missionárias 21D",
  description: "Estruture um funil de ofertas missionárias em 21 dias e pare de depender de apelos improvisados no altar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${geist.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.addEventListener('DOMContentLoaded', function() {
    // Pixel Utmify
    window.pixelId = "6a2a007dd1b06d9fda9a81f2";
    var p = document.createElement("script");
    p.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
    p.async = true;
    document.head.appendChild(p);

    // UTMs Utmify
    var u = document.createElement("script");
    u.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    u.setAttribute("data-utmify-prevent-xcod-sck", "");
    u.setAttribute("data-utmify-prevent-subids", "");
    u.setAttribute("data-utmify-ignore-iframe", "");
    u.setAttribute("data-utmify-is-cartpanda", "");
    u.async = true;
    document.head.appendChild(u);
  });
`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
