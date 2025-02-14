import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "@/components/Atom/Button";
import Navbar from "@/components/Navbar";
import { fizzbuzz } from "@/app/fizzbuzz/page";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="py-10 px-5 flex flex-col gap-10">
        <section>
          <div className="flex flex-row flex-wrap gap-10">
            <Button btnType="primary">Primary</Button>
            <Button btnType="secondary">Secondary</Button>
            <Button btnType="tertiary">Tertiary</Button>
            <Button btnType="accent">Accent</Button>
            <Button btnType="base-100">Base-100</Button>
            <Button btnType="info">Info</Button>
            <Button btnType="success">Success</Button>
            <Button btnType="warning">Warning</Button>
            <Button btnType="error">Error</Button>
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold">FizzBuzz</h1>
          <div className="flex flex-row flex-wrap gap-10">
            {fizzbuzz(270).map((item, index) => (
              <div key={index} className="text-lg font-bold">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
