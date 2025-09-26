import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/css/globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bengkel Sahabat Fonda Fonda",
  description:
    "Kepuasan dan kepercayaan pelanggan adalah prioritas utama kami, Serta meningkatan muttu dan kualitas adalah tanggung jawab kami",
  manifest: "/manifest.json",
  themeColor: "#000000",
  icons: {
    icon: "/assets/img/logo.png",
    apple: "/assets/img/logo.png",
  },
  openGraph: {
    title: "Bengkel Sahabat Fonda",
    description:
      "Kepuasan dan kepercayaan pelanggan adalah prioritas utama kami, Serta meningkatan muttu dan kualitas adalah tanggung jawab kami",
    url: "https://bengkel-sahabat.vercel.app",
    type: "website",
    images: [
      {
        url: "https://bengkel-sahabat.vercel.app/assets/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Bengkel Sahabat Fonda",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
