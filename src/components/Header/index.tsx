'use client';
import { UserButton, useUser } from "@clerk/nextjs";

import React from "react";
import Menu from "./Menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between w-full p-6 border-b-2 border-indigo-500 ">
        <Link href="/">Estudo Aurion</Link>
        <Menu />
    </header>
  );
}
