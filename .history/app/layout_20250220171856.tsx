import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OWL",
  description: "Organized Web Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div>
        <header />
      </div>
    </html>
  );
}
