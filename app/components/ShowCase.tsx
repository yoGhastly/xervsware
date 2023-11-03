'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import localFont from "next/font/local";
import { useIsomorphicLayoutEffect } from '../hooks/useIsoMorphicLayoutEffect';
import TextReveal from './reusable/text-reveal';
import ScrollReveal from './reusable/scroll-reveal';
import { Navbar } from '.';
// Font files can be colocated inside of `pages`
const stardom = localFont({
  src: "../../public/assets/fonts/Stardom-Regular.otf",
});

export const ShowCaseDesktop = () => {
  const isSm = useMediaQuery(480);
  const leftCampanario = useRef(null);
  const rightCampanario = useRef(null);
  const leftGeits = useRef(null);
  const rightGeits = useRef(null);


  useIsomorphicLayoutEffect(() => {
    const leftCampanarioElement = leftCampanario.current;
    const rightCampanarioRight = rightCampanario.current;

    const leftGeitsElement = leftGeits.current;
    const rightGeitsElement = rightGeits.current;

    gsap.to(leftCampanarioElement, {
      x: -400,
      duration: 1,
      zIndex: 999,
      position: "relative",
      rotate: -5,
      scrollTrigger: {
        trigger: leftCampanarioElement,
        scrub: 2,
      },
    });

    gsap.to(rightCampanarioRight, {
      x: 400,
      duration: 1,
      zIndex: 999,
      position: "relative",
      rotate: 5,
      scrollTrigger: {
        trigger: rightCampanarioRight,
        scrub: 2,
      },
    });

    gsap.to(leftGeitsElement, {
      x: -400,
      duration: 1,
      zIndex: 999,
      position: "relative",
      rotate: -5,
      scrollTrigger: {
        trigger: leftGeitsElement,
        scrub: 2,
      },
    });

    gsap.to(rightGeitsElement, {
      x: 400,
      duration: 1,
      zIndex: 999,
      position: "relative",
      rotate: 5,
      scrollTrigger: {
        trigger: rightGeitsElement,
        scrub: 2,
      },
    });
  }, [isSm]);
  return (
    <React.Fragment>

      <article className="flex justify-center items-center gap-8">
        <figure
          ref={leftCampanario}
          className="bg-purple-200 w-[80vw] h-[100vw] md:w-[50vw] max-w-xs md:max-w-2xl md:h-[45vw] rounded-3xl"
        >
          <Image
            src="/assets/images/campanario-left.png"
            fill
            alt="Campanario"
            className="object-cover rounded-3xl pointer-events-none"
          />
        </figure>
        <div className="flex flex-col justify-between items-center gap-10 z-0 absolute min-h-[500px]">
          <div className="flex justify-center items-center gap-5">
            <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
              dec 2022
            </p>
            <p>&ndash;</p>
            <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
              El Campanario Eventos.
            </p>
          </div>

          <h2
            className={clsx(
              stardom.className,
              "text-[clamp(46px,11vw,50px)] text-center"
            )}
          >
            Campanario Eventos.
          </h2>

          <hr className="w-full h-5 rounded-3xl max-w-xs bg-gradient-to-r from-[#eeb86d] to-[#9946b2] border-none" />
        </div>
        <figure
          ref={rightCampanario}
          className="bg-pink-200 w-[80vw] h-[100vw] md:w-[50vw] md:max-w-2xl md:h-[45vw] rounded-3xl"
        >
          <Image
            src="/assets/images/campanario-right.png"
            fill
            alt="Campanario"
            className="object-cover rounded-3xl pointer-events-none"
          />
        </figure>
      </article>

      <article className="flex justify-center items-center gap-8 mt-56">
        <figure
          ref={leftGeits}
          className="bg-purple-200 w-[80vw] h-[100vw] md:w-[50vw] md:max-w-2xl md:h-[45vw] rounded-3xl"
        >
          <Image
            src="/assets/images/geits-left.png"
            fill
            alt="Campanario"
            className="object-cover rounded-3xl pointer-events-none"
          />
        </figure>
        <div className="flex flex-col justify-between items-center gap-10 z-0 absolute min-h-[500px]">
          <div className="flex justify-center items-center gap-5">
            <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
              Jan 2023
            </p>
            <p>&ndash;</p>
            <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
              GEITS
            </p>
          </div>

          <h2
            className={clsx(
              stardom.className,
              "text-[clamp(46px,11vw,50px)] text-center max-w-xs"
            )}
          >
            GEITS UI/UX and development.
          </h2>

          <hr className="w-full h-5 rounded-3xl max-w-xs bg-gradient-to-r from-[#7ef29d] to-[#0f68a9] border-none" />
        </div>
        <figure
          ref={rightGeits}
          className="bg-pink-200 w-[80vw] h-[100vw] md:w-[50vw] md:max-w-2xl md:h-[45vw] rounded-3xl"
        >
          <Image
            src="/assets/images/geits-right.png"
            fill
            alt="Campanario"
            className="object-cover rounded-3xl pointer-events-none"
          />
        </figure>
      </article>
    </React.Fragment>
  )
}


export const ShowCaseMobile = () => {


  return (
    <React.Fragment>
      <ScrollReveal>

        <article className="flex justify-center items-center gap-8">
          <div className="flex flex-col justify-between items-center gap-10">
            <div className="w-full flex justify-center items-center gap-5">
              <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
                dec 2022
              </p>
              <p>&ndash;</p>
              <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
                El Campanario Eventos.
              </p>
            </div>

            <h2
              className={clsx(
                stardom.className,
                'text-[clamp(46px,11vw,50px)] text-center'
              )}
            >
              Campanario Eventos.
            </h2>

            <hr className="w-full h-5 rounded-3xl max-w-xs bg-gradient-to-r from-[#eeb86d] to-[#9946b2] border-none" />
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal>

        <article className="flex justify-center items-center gap-8 mt-56">
          <div className="flex flex-col justify-between items-center gap-10 min-h-[500px]">
            <div className="flex justify-center items-center gap-5">
              <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
                Jan 2023
              </p>
              <p>&ndash;</p>
              <p className="uppercase text-white text-[clamp(16px,11vw,16px)]">
                GEITS
              </p>
            </div>

            <h2
              className={clsx(
                stardom.className,
                'text-[clamp(46px,11vw,50px)] text-center max-w-xs'
              )}
            >
              GEITS UI/UX and development.
            </h2>

            <hr className="w-full h-5 rounded-3xl max-w-xs bg-gradient-to-r from-[#7ef29d] to-[#0f68a9] border-none" />
          </div>
        </article>
      </ScrollReveal>
    </React.Fragment>
  );
};
