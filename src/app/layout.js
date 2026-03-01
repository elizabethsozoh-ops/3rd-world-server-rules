
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
