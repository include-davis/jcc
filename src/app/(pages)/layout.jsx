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
  title: "Juvenile Caduceus Clinic",
  description:
    "We are a student-run clinic that delivers care and assistance to underprivileged communities in Sacramento who are facing high risk of toxic stress.",
  keywords:
    "davis, clinic, healthcare, volunteer, preventative health, sacramento, student, community, dental health, uc davis, davis, sexual health, physical health, mental health, doctors, medical assistants, free care, youth, growth, club",
  manifest: "/site.webmanifest",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      // Google's favicon guidelines note 16x16/32x32 are often skipped in
      // search results in favor of 48x48+ (ideally a multiple of 48px) —
      // listed first since Next.js renders <link> tags in array order and
      // some crawlers/consumers just take the first icon entry.
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
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
