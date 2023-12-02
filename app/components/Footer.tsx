"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center">
      <Link
        href="https://wa.me/message/JXBY6AHVQ5VSO1"
        target="_blank"
        className="font-bold flex gap-2 justify-center"
      >
        <p>Contact us on WhatsApp</p>
        <Image
          src="/assets/images/WhatsApp.svg"
          alt="Xervsware WhatsApp"
          width={24}
          height={24}
        />
      </Link>
    </footer>
  );
};
