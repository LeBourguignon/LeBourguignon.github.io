import React from 'react';
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

import Image from 'next/image';

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <div className="flex flex-row items-center gap-4">
                <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Mes compétences et outils
                </h2>
                <Badge variant={"outline"}>Skills</Badge>
            </div>
            
            <div className="m-auto grid grid-cols-4 sm:gap-12 lg:grid-cols-8 gap-8">
                <Image src="/icons/skills/HTML.svg" alt="HTML5" width={64} height={64} />
                <Image src="/icons/skills/CSS.svg" alt="CSS3" width={64} height={64} />
                <Image src="/icons/skills/JavaScript.svg" alt="JavaScript" width={64} height={64} />
                <Image src="/icons/skills/TypeScript.svg" alt="TypeScript" width={64} height={64} />

                <Image src="/icons/skills/React-Light.svg" alt="React" width={64} height={64} />
                <Image src="/icons/skills/NextJS-Light.svg" alt="Next.js" width={64} height={64} />
                <Image src="/icons/skills/NodeJS-Light.svg" alt="Node.js" width={64} height={64} />
                <Image src="/icons/skills/TailwindCSS-Light.svg" alt="Express.js" width={64} height={64} />

                <Image src="/icons/skills/CPP.svg" alt="C++" width={64} height={64} />
                <Image src="/icons/skills/Java-Light.svg" alt="Java" width={64} height={64} />
                <Image src="/icons/skills/Python-Light.svg" alt="Python" width={64} height={64} />
                <Image src="/icons/skills/Swift.svg" alt="Swift" width={64} height={64} />

                <Image src="/icons/skills/PHP-Light.svg" alt="PHP" width={64} height={64} />
                <Image src="/icons/skills/MySQL-Light.svg" alt="MySQL" width={64} height={64} />
                <Image src="/icons/skills/SQLite.svg" alt="SQLite" width={64} height={64} />
                <Image src="/icons/skills/Redis-Light.svg" alt="Redis" width={64} height={64} />

                <Image src="/icons/skills/Git.svg" alt="Git" width={64} height={64} />
                <Image src="/icons/skills/Docker.svg" alt="Docker" width={64} height={64} />
                <Image src="/icons/skills/VSCode-Light.svg" alt="VSCode" width={64} height={64} />
                <Image src="/icons/skills/Idea-Light.svg" alt="IntelliJ" width={64} height={64} />

                <Image src="/icons/skills/UnrealEngine.svg" alt="Unreal Engine" width={64} height={64} />
                <Image src="/icons/skills/Unity-Light.svg" alt="Unity" width={64} height={64} />
                <Image src="/icons/skills/Blender-Light.svg" alt="Blender" width={64} height={64} />
                <Image src="/icons/skills/Photoshop.svg" alt="Photoshop" width={64} height={64} />
            </div>
        </Section>
    );
};