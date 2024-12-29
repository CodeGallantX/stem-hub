import { Outfit, Merriweather } from "next/font/google";
import "../../globals.css";

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
  title: "STEM Hub - A Hub for Interactive STEM Learning",
  description:
    "STEM Hub is an innovative platform that makes STEM concepts fun, interactive, and engaging for students through games, apps, and learning tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="STEM, interactive learning, STEM games, educational tools, STEM apps, STEM education, science learning, math games, engineering activities, technology education, hands-on STEM, virtual STEM experiments, coding for kids, STEM projects, STEM challenges, online STEM resources, STEM curriculum, educational technology, STEM activities for students, STEM tools for teachers"
        />
        <meta name="author" content="STEM Hub Team" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://stem-hub.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/twitter-image.png" />
        <link rel="preload" href="/fonts/outfit.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/merriweather.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <title>{metadata.title}</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "STEM Hub",
            url: "https://stem-hub.com",
            description: metadata.description,
            logo: "/images/logo.png",
          })}
        </script>
      </head>
      <body
        className={`${outfit.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
