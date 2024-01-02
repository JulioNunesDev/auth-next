'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

import Link from "next/link";
import React from "react";

export default function Menu() {
  const {user, isLoaded} = useUser();
  return (
    <nav className="flex justify-end  p-4">
      {
       !user ? ( <Link href="/dashboard" className="p-3 bg-sky-400 rounded">Dashboard</Link> ): (null)
      }
        <div>
        {
        isLoaded && user && (
            <div className="flex gap-2">
            <Link href='/dashboard'>DashBoard</Link>
            <UserButton afterSignOutUrl="/"/>
            </div>
            )
        }
        </div>
      
    </nav>
  );
}
