import { Outfit, Merriweather } from "next/font/google";
import "../../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "ChemLab - A Hub for Interactive STEM Learning",
  description:
    "STEM-Hub is an innovative platform designed to make STEM concepts fun, interactive, and engaging for students through games, apps, and learning tools.",
  keywords:
    "STEM learning, interactive STEM, chemistry lab, physics simulations, educational apps, STEM platform, learning tools, STEM games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`${outfit.variable} ${merriweather.variable} antialiased bg-gray-100 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
