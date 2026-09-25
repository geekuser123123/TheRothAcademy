import { Playfair_Display, Inter } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export default function RetirementCertaintySessionLayout({ children }: LayoutProps<"/retirement-certainty-session">) {
  return <div className={`${playfairDisplay.variable} ${inter.variable}`}>{children}</div>;
}
