import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import { motion } from "framer-motion";

export default function Home({ projects }) {
     return (
          <motion.main
               className="container-xl w-full md:w-[880px] mx-auto"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >
               <Head>
                    <title>Patrick Snowden</title>
                    <meta charSet="utf-8" />
                    <meta
                         name="viewport"
                         content="initial-scale=1.0, width=device-width"
                    />
                    <meta
                         property="og:title"
                         content="Check Out My Portfolio!"
                    />
                    <meta
                         name="description"
                         content="Portfolio of Patrick Snowden"
                    />
                    <link
                         rel="icon"
                         href="https://pbs.twimg.com/profile_images/1475272137178902530/vdWg7gyM_400x400.jpg"
                    />
               </Head>
               <Header />
               <Hero />
               <FeaturedProjects />
          </motion.main>
     );
}
