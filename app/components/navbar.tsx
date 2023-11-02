'use client';

import React from "react";
import { Button, Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (

    <NextNavbar className='bg-transparent text-white' isBlurred>
      <NavbarBrand>
        <Image src="/assets/images/logo.svg" width={60} height={60} alt='Xervsware' />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            Showcase
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="default" href="#" variant="ghost" className='text-white hover:text-black'>
            Do magic
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  )
}
