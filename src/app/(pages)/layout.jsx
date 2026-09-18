import { Inter, DM_Sans, Khula } from "next/font/google";
import Navbar from "./_components/navBar/navBar";
import Footer from "./_components/footer/footer";
import { getSiteSettings } from "./_data/site";
import "./_globals/globals.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const khula = Khula({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-khula",
});

export const metadata = {
  description:
    "We are a UC Davis community of web developers and designers dedicated to fostering collaboration, growth and the creation of creative digital solutions.",
  keywords:
    "include, computer science, cs, design, figma, next, react, software, development, uc davis, davis, community, web, developers, designers, dedicated, fostering, collaboration, growth, club",
  manifest: "/site.webmanifest",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
  other: {
    "msapplication-TileColor": "#da532c",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({ children }) {
  const { joinFormLink } = await getSiteSettings();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${khula.variable}`}>
        <Navbar joinFormLink={joinFormLink} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
