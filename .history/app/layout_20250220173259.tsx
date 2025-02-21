import type { Metadata } from "next";
import "./globals.css";
import Header from "./../components/Header";

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
      <body>
        <div>
          <Header />
          <page></page>
        </div>
      </body>

    </html>
  );
}
