/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator"
import { buttonVariants } from "@/components/ui/button";
import { LucideIcon, Gamepad2, Zap, Shirt, Cog, MessageCircle, Joystick } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Status = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full flex flex-col">
                    <p className="text-lg text-muted-foreground px-4 pt-4">Projets</p>
                    <div className="flex flex-col gap-4 px-4 py-2">
                        {PROJECTS.map((project, index) => (
                            <Project 
                                key={index} 
                                {...project} 
                            />
                        ))}
                    </div>
                    <Separator className="" />
                    <Link
                        href="https://github.com/LeBourguignon" 
                        className={cn(buttonVariants({ variant: "ghost" }), "rounded-t-none rounded-b-lg p-2")}
                    >
                        <p className="text-xs text-muted-foreground">Voir les projets</p>
                    </Link>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col h-full gap-4">
                <Card className="flex-1 p-4">
                    <p className="text-lg text-muted-foreground">Formations</p>
                    <div className="flex flex-col gap-4">
                        {FORMATIONS.map((formation, index) => (
                            <Formation 
                                key={index} 
                                {...formation} 
                            />
                        ))}
                    </div>
                </Card>

                <Card className="flex-1 p-4">
                    <p className="text-lg text-muted-foreground">Expériences</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work 
                                key={index} 
                                {...work} 
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </Section>
    );
};

const PROJECTS: ProjectProps[] = [
    {
        logo: Gamepad2,
        title: "Heredium",
        description: "Jeu vidéo d'horreur en 3D, développé avec Unreal Engine.",
        url: "/"
    },
    {
        logo: Zap,
        title: "Road To Computing",
        description: "Jeu sérieux sur l'éléctronique, développé avec Unity.",
        url: "/"
    },
    {
        logo: Shirt,
        title: "Augmented Mirror",
        description: "Cabine d'essayage virtuelle, développée avec Unity.",
        url: "/"
    },
    {
        logo: Cog,
        title: "Moteur physique",
        description: "Moteur physique en 3D, développé en C++.",
        url: "https://github.com/LeBourguignon/8INF935-Math_Physique-Projet"
    },
    {
        logo: MessageCircle,
        title: "SaaS like Twitter",
        description: "Application web, développée avec React, Python et Redis.",
        url: "https://github.com/LeBourguignon/4A_ILC_PROJET_CLOUD_COMPUTING"
    },
    {
        logo: Joystick,
        title: "Java Chess",
        description: "Jeu d'échecs, développé en Java.",
        url: "https://github.com/LeBourguignon/Java-Chess"
    }
];

type ProjectProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const Project = (props: ProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};

const WORKS: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/C560BAQFQk3FPApFKtw/company-logo_100_100/0/1631424468502/gip_cpage_logo?e=1729728000&v=beta&t=nPLBWfZq4GKUgwqriRxMe-39gVEds1QZycwi1GhLFrg",
        title: "CPage",
        role: "Concepteur technique",
        date: "avr. 2023 - août 2023",
        url: "https://www.cpage.fr/",
        internship: true
    },
    {
        image: "https://media.licdn.com/dms/image/C4E0BAQHL4tq0MmOaVg/company-logo_100_100/0/1655135871004?e=1729728000&v=beta&t=GeUl5Mkhf7KbP4Z6Ig2c8l07MhPKUrR3gOg_O6tGg9U",
        title: "AEI ESIREM",
        role: "Bénévole",
        date: "mars 2022 - mars 2023",
        url: "https://www.linkedin.com/company/aei-esirem/"
    },
    {
        image: "https://media.licdn.com/dms/image/C4E0BAQE4a32vXviXHA/company-logo_100_100/0/1631322665974?e=1729728000&v=beta&t=Zc9808DHICrNFyQH-JiofuN2Yi_CWtxED-E5-KYeGaw",
        title: "Adrexo",
        role: "Distributeur de prospectus",
        date: "juil. 2022 - août 2022",
        url: "https://adrexo.fr/"
    },
    {
        image: "https://media.licdn.com/dms/image/D560BAQHrodVZWqrWOA/company-logo_100_100/0/1713451996801/dijon_metropole_logo?e=1729728000&v=beta&t=oh8tWAP56JMJAgl9eL0TYTGayytKZzKTDbMONZO5_fk",
        title: "Dijon métropole",
        role: "Adjoint technique",
        date: "juil. 2021 - août 2021",
        url: "https://www.dijon-metropole.fr/"
    }
];

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    internship?: boolean;
};

const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded" />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.internship && <Badge variant="outline">Stage</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    );
};

const FORMATIONS: FormationProps[] = [
    {
        image: "https://media.licdn.com/dms/image/D4D0BAQEi1K21GtCr8Q/company-logo_100_100/0/1710320868081/esirem_logo?e=1729728000&v=beta&t=6GMC0C2UIhlF5edrU8ri9_DbdtDQqXc4IUnvc_8SqdQ",
        title: "Polytech Dijon",
        role: "Ingénieur informatique",
        date: "2021 - 2024",
        url: "https://www.polytech-dijon.fr/"
    },
    {
        image: "https://media.licdn.com/dms/image/C4E0BAQH-HRGkXwfBgQ/company-logo_100_100/0/1630594623564/universit_du_qubec__chicoutimi_logo?e=1729728000&v=beta&t=gh3_PptaGc_Cfk-1tZGgAFtzC--SISEt1gxjDhNlqfQ",
        title: "UQAC",
        role: "Maîtrise en informatique",
        date: "2023 - 2024",
        url: "https://www.uqac.ca/"
    }
];

type FormationProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

const Formation = (props: FormationProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded" />
            <div className="mr-auto">
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    );
} 