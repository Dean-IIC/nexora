"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks } from "./nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="font-semibold">Nexora 2.0</SheetTitle>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>
        <nav aria-label="Mobile">
          <NavLinks className="flex flex-col gap-1 [&_a]:text-base" onNavigate={() => setOpen(false)} />
        </nav>
        <Button asChild variant="gradient" className="mt-auto">
          <Link href="/register" onClick={() => setOpen(false)}>
            Register your team
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
