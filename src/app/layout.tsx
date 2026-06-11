import type { Metadata } from "next";
import { Cinzel, Geist } from "next/font/google";
import Script from "next/script";
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
        <Script
          id="utmify-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "6a2a007dd1b06d9fda9a81f2";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
        <Script
          id="utmify-latest"
          strategy="afterInteractive"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          data-utmify-ignore-iframe=""
          data-utmify-is-cartpanda=""
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
