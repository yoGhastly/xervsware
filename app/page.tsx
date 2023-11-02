"use client";
import React from "react";
import { Footer, MagicStar, Navbar } from "./components";

import styles from "./styles/Header.module.css";
import {
  Button,
} from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import ScrollReveal from "./components/reusable/scroll-reveal";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col gap-10"
      style={{ padding: "12px 24px 10px" }}
    >
      <Navbar />

      <header
        className="flex flex-col gap-10 justify-center items-center max-w-3xl"
        style={{ margin: "0 auto" }}
      >
        <h1 className="font-extrabold text-white text-[clamp(46px,11vw,80px)] text-center leading-normal">
          You bring the idea, we do the{" "}
          <span className="relative h-14">
            <MagicStar />
            <span className={styles.magic}>magic</span>.
          </span>
        </h1>
        <p className="text-[#9A9B9D] text-center max-w-2xl text-[clamp(16px,2vw,20px)]">
          With a commitment to excellence and a touch of magic, Xervsware
          transforms your concepts into powerful, user-friendly software
          applications.
        </p>

        <Button variant="solid" color="default">
          Get Started
        </Button>
      </header>

      <section
        className={clsx([
          "flex justify-center items-center",
          "flex-col gap-10",
          "mt-14",
        ])}
      >
        <h2 className="font-bold text-2xl text-white text-center">
          What can we do?{" "}
          <span className="font-normal text-[#9A9B9D] text-[clamp(16px,2vw,20px)]">
            {" "}
            All the services we offer to grow your business.
          </span>
        </h2>

        <div className="grid md:auto-rows-fr grid-cols-1 md:grid-cols-2 gap-8 text-white">
          <div className="flex flex-col justify-center items-center border border-[#38363E] rounded p-5">
            <h3 className={clsx(styles.number, "text-[clamp(46px,11vw,80px)]")}>
              +10,000
            </h3>
            <p className="text-[#9A9B9D]">Monthly users</p>
          </div>

          <div className="flex flex-col gap-10 max-w-md border border-[#38363E] rounded p-5">
            <p
              className={clsx(
                "md:text-[clamp(46px,11vw,30px)]",
                "text-[clamp(36px,11vw,30px)]",
                styles.gradient,
                "font-bold",
              )}
            >
              Custom Software development
            </p>
            <p className="text-[#9A9B9D]">
              Our expertise in extending cutting-edge technologies, combined
              with robust development tools, ensures rapid and efficient
              deployment, empowering your business to thrive in the digital
              realm.
            </p>
          </div>
          <ScrollReveal className="relative border border-[#38363E] rounded h-36 md:h-64 md:col-span-2">
            <Image src="/assets/images/tools.svg" fill className="md:object-cover" alt="Tools" />
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
