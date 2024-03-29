import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "An app created with Next.js that wants to be a IMDb Clone :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <NavBar />
        <SearchBox />
        {children}
      </body>
    </html>
  );
}
