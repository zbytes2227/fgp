"use client";
import Events from "@/components/Events";
import FeatureCard from "@/components/FeatureCard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hods from "@/components/Hods";
import MarqueeNews from "@/components/MarqueeNews";
import Navbar, { NavbarSimple } from "@/components/Navbar";
import Objective from "@/components/Objective";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <MarqueeNews/>
      <Fade direction="up" triggerOnce="true">
        <Hero />
      </Fade>
      <Fade direction="up" triggerOnce="true">
        <Hero2 />
      </Fade>
      <Fade direction="up" triggerOnce="true">
        <Objective />
      </Fade>
      <Fade direction="up" triggerOnce="true">
        <Hods />
      </Fade>
      <Fade direction="up" triggerOnce="true">
        <Events />
      </Fade>
      <Fade direction="up" triggerOnce="true">
        <Features />
      </Fade>
      <Footer />
    </>
  );
}
