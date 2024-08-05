import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Feroze Gandhi Polytechnic, Raebareli",
  description: "Feroze Gandhi Polytechnic (FGP), Raebareli is approved by AICTE, New Delhi. FGP offers diploma courses in various engineering disciplines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/image/favicon.ico"/>
      <link rel="manifest" href="/manifest.json"/>
      <meta name="theme-color" content="#0088ff" />
      <meta property="og:title" content="Feroze Gandhi Polyechnic, Raebareli" />
      <meta property="og:type" content="website" />
      <meta property="og:URL" content="https://www.fgp.org.in" />
      <meta property="og:image" content="https://fgp.org.in/192.png" />
      <meta name="keywords" content="Feroze Gandhi Polytechnic, FGP raebareli, Feroze Gandhi, FGP RBL, fgp raebareli, feroze gandhi polytechnic"/>
      <meta property="og:description" content="Feroze Gandhi Polytechnic (FGP), Raebareli is approved by AICTE, New Delhi. FGP offers diploma courses in various engineering disciplines." />
      <meta name="robots" content="index, follow"/>
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#0088ff"
          initialPosition={0.22}
          crawlSpeed={300}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <Navbar/>
        {children}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement("script");i.async=!0,i.type="text/javascript",i.src="https://app.artibot.ai/loader.js",e.getElementsByTagName("head").item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState)){new window.ArtiBot({i:"35862967-a52a-4081-94d1-b20cac54d19d"});a=!0}}}(window,document);
            `,
          }}
        />
      </body>
    </html>
  );
}
