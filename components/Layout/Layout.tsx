import Footer from "@components/Footer";
import { ContxtProvider } from "context/ContxtProvider";
import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Head from "next/head";
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <ContxtProvider>
        <Head>
        <title>Platzi Avo</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="images/avocado-icon.png"
        ></link>
      </Head>
        <Navbar />
        {children}
        <Footer />
      </ContxtProvider>
    </div>
  );
};

export default Layout;
