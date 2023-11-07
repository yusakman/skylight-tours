import "@/styles/globals.scss";
import { open_sans } from "@/fonts/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <main className={open_sans.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
