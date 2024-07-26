/* eslint-disable @next/next/no-img-element */
import React, { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("font-mono text-primary bg-accent/30 hover:bg-accent/50 border border-accent px-1 py-0 rounded-sm", className)} {...props} />
    );
}

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Baptiste Andres</h2>
                <h3 className="font-caption text-3xl">Ingénieur Logiciel</h3>
                <p className="text-base text-muted-foreground">
                Je suis Baptiste Andres, étudiant français en dernière année d&apos;ingénierie informatique à Polytech Dijon, spécialisé en génie logiciel. Je suis également inscrit en double diplôme pour une maîtrise en informatique spécialisée en jeu vidéo à l&apos;Université du Québec à Chicoutimi.
                </p>
                <p className="text-base text-muted-foreground">
                Je recherche un stage de fin d&apos;études (5-6 mois) dans le domaine du jeu vidéo ou de l&apos;édition de logiciels/web, avec une possibilité de CDI par la suite. Mes expériences de projets et stages m&apos;ont permis de maîtriser divers langages de programmation et leurs frameworks. J&apos;ai participé à toutes les phases de développement d&apos;applications et de jeux, utilisant des méthodes comme Scrum et CI/CD. Je valorise l&apos;autonomie et le travail en équipe.
                </p>
            </div>
            <div className="flex-[2] m-auto">
                <img 
                    src="/PP.jpg" 
                    alt="Baptiste Andres" 
                    className="w-full h-auto max-w-xs rounded-full m-auto"
                />
            </div>
        </Section>
    );
}