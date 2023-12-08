"use client";
import React, { LegacyRef, createRef, useLayoutEffect, useRef } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import localFont from "next/font/local";
import { useIsomorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import ScrollReveal from "./reusable/scroll-reveal";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

const stardom = localFont({
  src: "../../public/assets/fonts/Stardom-Regular.otf",
});

const projects = [
  {
    date: "dec 2023",
    subHeader: "Ad Astra",
    name: "Ad Astra app",
    href: "https://expo.dev/@ghastly/ad-astra",
    src: "/assets/images/adastra-right.png",
    srcLeft: "/assets/images/adastra-left.png",
    color: "secondary",
    gradient:
      "w-full h-5 rounded-3xl max-w-xs bg-gradient-to-r from-[#9946b2] to-[#e0e0e0] border-none",
  },
  {
    date: "jan 2023",
    subHeader: "GEITS",
    name: "GEITS UI/UX and development.",
    href: "https://geits.tech",
    src: "/assets/images/geits-right.png",
    srcLeft: "/assets/images/geits-left.png",
    color: "success",
    gradient:
      "w-full h-5 rounded-3xl max-w-xs bg-gradient-to-r from-[#7ef29d] to-[#0f68a9] border-none",
  },
  {
    date: "dec 2022",
    subHeader: "Campanario Eventos",
    name: "Campanario Eventos.",
    src: "/assets/images/campanario-right.png",
    srcLeft: "/assets/images/campanario-left.png",
    href: "https://campanario-eventos.vercel.app",
    color: "warning",
    gradient:
      "w-full h-5 rounded-3xl max-w-xs bg-gradient-to-r from-[#eeb86d] to-[#9946b2] border-none",
  },
];

export const ShowCaseDesktop = () => {
  const isSm = useMediaQuery(480);

  const projectRefs = useRef(
    projects.map(() => ({ left: createRef(), right: createRef() })),
  );

  useIsomorphicLayoutEffect(() => {
    projectRefs.current.forEach(({ left, right }, index) => {
      const leftElement = left.current;
      const rightElement = right.current;

      gsap.to(leftElement as gsap.TweenTarget, {
        x: -400,
        duration: 1,
        zIndex: 999,
        position: "relative",
        rotate: -5,
        scrollTrigger: {
          trigger: leftElement as gsap.DOMTarget,
          scrub: 2,
        },
      });

      gsap.to(rightElement as gsap.TweenTarget, {
        x: 400,
        duration: 1,
        zIndex: 999,
        position: "relative",
        rotate: 5,
        scrollTrigger: {
          trigger: rightElement as gsap.DOMTarget,
          scrub: 2,
        },
      });
    });
  }, [isSm]);

  return (
    <React.Fragment>
      {projects.map((project, index) => (
        <article
          className="flex justify-center items-center gap-8"
          key={project.name}
        >
          <figure
            ref={projectRefs.current[index].left as LegacyRef<HTMLElement>}
            className="bg-purple-200 w-[80vw] h-[100vw] md:w-[50vw] max-w-xs md:max-w-2xl md:h-[45vw] rounded-3xl"
          >
            <Image
              src={project.srcLeft}
              fill
              alt={project.name}
              className="object-cover rounded-3xl pointer-events-none"
            />
          </figure>
          <div className="flex flex-col justify-between items-center gap-10 z-0 absolute min-h-[500px]">
            <div className="flex justify-center items-center gap-5">
              <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
                {project.date}
              </p>
              <p className="text-white">&ndash;</p>
              <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
                {project.name}
              </p>
            </div>

            <Link
              href={project.href}
              target="_blank"
              className={clsx(
                stardom.className,
                "text-[clamp(46px,11vw,50px)] text-center text-white",
              )}
            >
              {project.name}
            </Link>

            <hr className={project.gradient} />
          </div>
          <figure
            ref={projectRefs.current[index].right as LegacyRef<HTMLElement>}
            className="bg-pink-200 w-[80vw] h-[100vw] md:w-[50vw] md:max-w-2xl md:h-[45vw] rounded-3xl"
          >
            <Image
              src={project.src}
              fill
              alt={project.name}
              className="object-cover rounded-3xl pointer-events-none"
            />
          </figure>
        </article>
      ))}
    </React.Fragment>
  );
};

export const ShowCaseMobile = () => {
  return (
    <React.Fragment>
      <ScrollReveal className="flex flex-col gap-16">
        {projects.map((project) => (
          <article
            className="flex justify-center items-center gap-8"
            key={project.name}
          >
            <div className="flex flex-col justify-between items-center gap-10">
              <div className="w-full flex justify-center items-center gap-5">
                <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
                  {project.date}
                </p>
                <p className="text-white">&ndash;</p>
                <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
                  {project.subHeader}
                </p>
              </div>

              <h2
                className={clsx(
                  stardom.className,
                  "text-[clamp(46px,11vw,50px)] text-center text-white",
                )}
              >
                {project.name}
              </h2>

              <Chip
                variant="flat"
                color={project.color as any}
                as="a"
                href={project.href}
                target="_blank"
              >
                Site
              </Chip>
              <figure className="relative bg-purple-200 w-[80vw] h-[100vw] rounded-xl">
                <Image
                  src={project.src}
                  fill
                  alt="Campanario"
                  className="object-cover rounded-xl pointer-events-none"
                />
              </figure>
              <hr className={project.gradient} />
            </div>
          </article>
        ))}
      </ScrollReveal>
    </React.Fragment>
  );
};
