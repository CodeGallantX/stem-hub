import { Outfit, Merriweather } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata = {
  title: "Features - A Hub for Interactive STEM Learning",
  description: "STEM-Hub is an innovative platform designed to make STEM concepts fun, interactive, and engaging for students through games, apps, and learning tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
