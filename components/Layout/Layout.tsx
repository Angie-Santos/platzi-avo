import Footer from "@components/Footer";
import { ContxtProvider } from "context/ContxtProvider";
import React, { ReactNode } from "react";
import Navbar from "../Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <ContxtProvider>
        <Navbar />
        {children}
        <Footer />
      </ContxtProvider>
    </div>
  );
};

export default Layout;
