import React from "react";
import VedioSection from "./VideoSection";

function Home() {
  return (
    <section className="">
      <section className="flex md:flex-col flex-row justify-center items-center md:px-20 px-0 py-4 md:gap-x-10 gap-x-2">
        <section className="grid md:grid-cols-3 gap-8 grid-cols-1 ">
          <VedioSection />
          <VedioSection />
          <VedioSection />
          <VedioSection />
          <VedioSection />
          <VedioSection />
          <VedioSection />
          <VedioSection />
          <VedioSection />
        </section>
      </section>
    </section>
  );
}

export default Home;
