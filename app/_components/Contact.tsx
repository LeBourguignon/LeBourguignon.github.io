/* eslint-disable @next/next/no-img-element */
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Section } from './Section';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const CONTACT_CARDS = [
    {
        image: "https://lh3.googleusercontent.com/a/ACg8ocIip0fDr2XbSwnMQY1wW7K_pe3nNYcaFEEqewFwwO3l5XToZDrM=s288-c-no",
        mediumImage: "https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=w240-h480-rw",
        name: "Baptiste Andres",
        description: "baptiste.andres.01@gmail.com",
        url: "mailto:baptiste.andres.01@gmail.com",
        className: "flex-1"
    },
    {
        image: "https://media.licdn.com/dms/image/D4E35AQHaLTf2FUglxQ/profile-framedphoto-shrink_200_200/0/1711908638962?e=1722463200&v=beta&t=dDfBtN4vCZ14aRSFfOifnAPNcQbZFTZK9UqANEyrUmI",
        mediumImage: "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw",
        name: "Baptiste Andres",
        description: "LinkedIn",
        url: "https://www.linkedin.com/in/baptiste-andres/",
        className: "flex-1"
    },
    {
        image: "https://avatars.githubusercontent.com/u/63340452?v=4",
        mediumImage: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=s48-rw",
        name: "LeBourguignon",
        description: "GitHub",
        url: "https://github.com/LeBourguignon",
        className: "flex-1"
    }
];

type ContactCardProps = {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
    className?: string;
};

const ContactCard = (props: ContactCardProps) => {
    return (
        <Link href={props.url} className={cn("w-full", props.className)}>
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                <div className="relative w-10 h-10">
                    <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                    <img src={props.mediumImage} alt={props.name} className="w-4 h-4 rounded-full object-contain absolute -bottom-1 -right-1" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">{props.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{props.description}</p>
                </div>
                <ArrowUpRight className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={16} />
            </Card>
        </Link>
    );
};

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <div className="flex flex-row items-center gap-4">
                <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Pour me contacter
                </h2>
                <Badge variant={"outline"}>Contact me</Badge>
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-4">
                {CONTACT_CARDS.map((card, index) => (
                    <ContactCard key={index} {...card} />
                ))}
            </div>
        </Section>
    );
};