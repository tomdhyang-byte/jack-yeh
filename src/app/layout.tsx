import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "戰略諮詢 | 前麥肯錫/COO",
  description:
    "從騰訊、Meta 到麥肯錫，再到 400 人企業 COO。用頂級管理顧問的視角，為你的職涯與商業難題，進行一次精準的「外科手術」。",
  keywords: ["戰略諮詢", "麥肯錫", "職涯規劃", "商業顧問", "COO"],
  openGraph: {
    title: "戰略諮詢 | 前麥肯錫/COO",
    description:
      "用頂級管理顧問的視角，為你的職涯與商業難題，進行一次精準的「外科手術」。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${inter.variable} ${notoSansTC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
