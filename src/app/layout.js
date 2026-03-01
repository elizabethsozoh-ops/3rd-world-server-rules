
import { Bangers, Roboto_Condensed } from 'next/font/google';
import "./globals.css";

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
});

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: "3rd World RP - Server Rules",
  description: "Interactive Comic Book Rulebook for 3rd World RP",
  openGraph: {
    title: "3rd World RP - Server Rules",
    description: "Interactive Comic Book Rulebook for 3rd World RP",
    images: [
      {
        url: "/assets/3RDWORLDROLEPLAY-COVERPAGE.png",
        width: 1200,
        height: 630,
        alt: "3rd World Roleplay - Server Rules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3rd World RP - Server Rules",
    description: "Interactive Comic Book Rulebook for 3rd World RP",
    images: ["/assets/3RDWORLDROLEPLAY-COVERPAGE.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} ${robotoCondensed.variable} antialiased bg-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
