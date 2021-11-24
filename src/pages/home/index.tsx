import React from "react";
import Layout from "src/containers/Layout";
import Hero from "src/components/Hero";
import Results from "src/components/Results";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Results/>
    </Layout>
  );
}
