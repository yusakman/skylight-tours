import "@/styles/globals.scss";
import { open_sans } from "@/fonts/fonts";

export default function App({ Component, pageProps }) {
  return (
    <main className={open_sans.className}>
      <Component {...pageProps} />
    </main>
  );
}
