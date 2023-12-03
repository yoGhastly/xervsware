import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const memberData = [
  {
    name: "Diego Espinosa",
    title: "Software Engineer",
    site: "https://diegoes.vercel.app",
    linkedIn: "http://linkedin.com/in/josé-diego-espinosa-garcía-391205223",
    src: "/assets/images/diego-profile.jpg",
  },
  {
    name: "Servando Negrete",
    title: "Software Engineer",
    site: "https://servandongti.vercel.app/",
    linkedIn: "http://linkedin.com/in/servandongti",
    src: "/assets/images/servando-profile.jpeg",
  },
];

export const OurTeam = () => {
  return (
    <section className="bg-[#080808] max-w-xs md:max-w-3xl p-8 md:p-16 flex flex-col gap-8 rounded-md">
      <h1 className="self-start font-bold text-xl md:text-[clamp(46px,11vw,46px)] ">
        Our Team
      </h1>
      <p className="text-[#9A9B9D] self-start w-full">
        Welcome to the heart of our innovation! At Xervsware, our software
        development team is a vibrant mix of talented individuals who share a
        passion for crafting cutting-edge solutions.
      </p>
      <div className="relative flex flex-col md:flex-row gap-5 justify-between self-center">
        {memberData.map(({ name, title, site, linkedIn, src }, idx) => (
          <Link href={site} key={idx} target="_blank">
            <figure
              className={clsx(
                "relative w-60 h-80 rounded-lg overflow-hidden bg-[#e0e0e0]",
                "flex mr-4",
                "grayscale transition duration-300 ease-in-out hover:grayscale-0 focus:grayscale-0",
              )}
            >
              <Image
                src={src}
                fill
                alt="Member"
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 mx-4 my-10 z-50">
                <p className="font-semibold text-[clamp(20px,11vw,20px)] ">
                  {name}
                </p>
                <p className="text-[clamp(16px,11vw,16px)] text-[#9A9B9D]">
                  {title}
                </p>
              </div>

              <div
                className={clsx(
                  "absolute inset-0",
                  "bg-gradient-to-t from-[#695093] via-[#bc6e88] to-transparent opacity-40",
                  "transition duration-300 ease-in-out",
                )}
              ></div>
            </figure>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {memberData.map((member, idx) => (
          <Link href={member.linkedIn} key={idx} className="flex gap-4">
            <Image
              src="/assets/images/linkedIn.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
            <p>{member.name}&apos;s LinkedIn</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
