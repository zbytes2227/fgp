"use client";
import FeatureCard from "@/components/FeatureCard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import HodCard from "@/components/HodCard";
import Hods from "@/components/Hods";
import { NavbarSimple } from "@/components/Navbar";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavbarSimple />
      <Hero />
      <Hero2 />
      <Hods />
      <Features />
      <Footer/>
    </>
  );
}
