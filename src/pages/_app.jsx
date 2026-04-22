import { Inter, DM_Sans, Khula } from "next/font/google";
import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import "@/styles/globals.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const khula = Khula({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-khula",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${dmSans.variable} ${khula.variable}`}>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}