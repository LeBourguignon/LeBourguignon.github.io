import React from "react";
import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { GmailIcon } from "./icons/GmailIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  return (
    <header className="bg-card sticky top-0 pt-4">
        <Section className="flex items-baseline">
          <Link href="/">
            <h1 className="text-lg font-bold text-primary">lebourguignon.github.io</h1>
          </Link>
          <div className="flex-1" />
          <ul className="flex items-center gap-2">
            <Link 
              href="mailto:baptiste.andres.01@gmail.com"
              className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
            >
                <GmailIcon size={12} className="text-foreground"/>
            </Link>

            <Link 
              href="https://www.linkedin.com/in/baptiste-andres/"
              className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
            >
                <LinkedinIcon size={12} className="text-foreground"/>
            </Link>

            <Link 
              href="https://github.com/LeBourguignon"
              className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
            >
                <GithubIcon size={12} className="text-foreground"/>
            </Link>
          </ul>
        </Section>
        <Separator className="mt-4"/>
    </header>
  );
};