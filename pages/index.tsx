import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
      </Head>
      <Hero />
      <About />
      <Cto />
      <Portfolio />
      <ClientPortfolio />
      <Contact />
    </>
  );
};

export default Home;
