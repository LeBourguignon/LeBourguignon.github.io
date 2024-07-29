import React from "react";

import { Header } from "../_components/Header";
import { Spacing } from "../_components/Spacing";
import { Footer } from "../_components/Footer";
import { UnderDev } from "../_components/UnderDev";

export default function Projects() {
    return(
      <main className="flex flex-col min-h-screen">
        <Header />

        <Spacing size="sm"/>

        <UnderDev />

        <Spacing size="sm"/>

        <Footer />
      </main>
    );
  }