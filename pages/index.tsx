import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import Hero from "../src/components/Hero";
import styles from "../src/styles/Home.module.css";
import About from "../src/components/About";
import Cto from "../src/components/Cto";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Projects/Portfolio";
import ClientPortfolio from "../src/components/Projects/ClientPortfolio";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio Site | Software Developer Portfolio</title>
        <meta
          name="description"
          content="This is Benny Hernandez software development portfolio site."
        />

        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://www.bennyhernandez.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Portfolio Site | Software Developer Portfolio"
        />
        <meta
          property="og:description"
          content="This is Benny Hernandez software development portfolio site."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Nomad-Freedom/portfolio-v1/main/public/screenshot.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bennyhernandez.com" />
        <meta
          property="twitter:url"
          content="https://www.bennyhernandez.com/"
        />
        <meta
          name="twitter:title"
          content="Portfolio Site | Software Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="This is Benny Hernandez software development portfolio site."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Nomad-Freedom/portfolio-v1/main/public/screenshot.png"
        />
      </Head>
      <Hero />
      <About />
      <Cto />
      <Portfolio />
      {/* <ClientPortfolio /> */}
      <Contact />
    </>
  );
};

export default Home;
