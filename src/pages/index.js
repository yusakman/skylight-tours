import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Skylight Tours</title>
        <meta
          name="description"
          content="Skylight Tours is a tour and travel company in Bali"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header setHeader={false} />
        <Hero />
        <Services />
        <Packages />
        <About />
        <Footer />
      </main>
    </>
  );
}
