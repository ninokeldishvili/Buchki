"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
export default function Home() {
  return (
    <div className="m-4">
      <h1>Homepage content</h1>
    </div>
  );
}
