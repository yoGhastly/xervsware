"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
const stardom = localFont({
  src: "../../public/assets/fonts/Stardom-Regular.otf",
});
import { Footer, Navbar, ShowCaseDesktop, ShowCaseMobile } from "../components";
import clsx from "clsx";
import { useMediaQuery } from "../hooks/useMediaQuery";
import TextReveal from "../components/reusable/text-reveal";
import RevealElement from "../components/reusable/reveal-element";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useCopyToClipboard } from "usehooks-ts";

const ShowcaseComponent: React.FC = () => {
  const isSm = useMediaQuery(480);
  const [value, copy] = useCopyToClipboard();
  const [copied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    copy("info@xervsware.com");
    setIsCopied(true);

    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  return (
    <React.Fragment>
      <Navbar />
      <main
        className="min-h-screen flex flex-col gap-10"
        style={{ padding: "12px 24px 10px", overflowX: "hidden" }}
      >
        <section
          className={clsx(
            "mx-auto",
            "flex flex-col justify-center items-center",
            "max-w-3xl gap-16",
          )}
        >
          <header
            className={clsx(
              "w-full md:w-full h-screen",
              "flex flex-col gap-5 justify-center items-center",
            )}
          >
            <TextReveal
              text="Showcase"
              className={clsx(
                stardom.className,
                "font-extrabold text-white text-[clamp(46px,11vw,80px)] text-center leading-normal",
              )}
            />
            <RevealElement>
              <p className="text-center">
                Explore our impressive portfolio showcasing the pinnacle of our
                expertise in software development and cutting-edge UI/UX design.
                Immerse yourself in the innovative solutions we&apos;ve crafted
                for various clients, demonstrating our commitment to excellence
                and creativity in every project.
              </p>
            </RevealElement>
          </header>

          {!isSm ? <ShowCaseDesktop /> : <ShowCaseMobile />}

          <div className="flex flex-col justify-center md:items-center w-full gap-16 h-96">
            <p className="uppercase">get in touch</p>
            <Popover placement="bottom" color="success" isOpen={copied}>
              <PopoverTrigger onClick={copyToClipboard}>
                <h3
                  className={clsx(
                    stardom.className,
                    "text-2xl md:text-[clamp(60px,11vw,60px)] cursor-pointer",
                  )}
                >
                  info@xervsware.com
                </h3>
              </PopoverTrigger>

              <PopoverContent>
                <p>Copied to Clipboard</p>
              </PopoverContent>
            </Popover>
            <Button
              variant="solid"
              color="default"
              as="a"
              href="https://cal.com/xervsware"
              target="_blank"
            >
              Book Virtual Session
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </React.Fragment>
  );
};

export default ShowcaseComponent;
