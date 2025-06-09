import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/css/globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bengkel Sahabat",
  description:
    "Kepuasan dan kepercayaan pelanggan adalah prioritas utama kami, Serta meningkatan muttu dan kualitas adalah tanggung jawab kami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>{children}</body>
    </html>
  );
}
