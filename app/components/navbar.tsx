"use client";

import React from "react";
import {
  Button,
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <NextNavbar className="bg-transparent text-white" isBlurred>
      <NavbarBrand as="a" href="/">
        <Image
          src="/assets/images/logo.svg"
          width={60}
          height={60}
          alt="Xervsware"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/showcase">Showcase</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href="https://cal.com/xervsware"
            variant="ghost"
            className="text-white hover:text-black"
          >
            Book Virtual Session
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
};
