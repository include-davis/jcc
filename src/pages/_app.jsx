import { Inter, DM_Sans } from "next/font/google";
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

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${dmSans.variable}`}>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}