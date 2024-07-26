import React from "react";
import { Section } from "./Section";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
    return (
        <footer className="bg-card">
            <Separator />
            <Section className="py-6">
                <p className="text-muted-foreground text-sm text-center">© 2024 Baptiste Andres</p>
            </Section>
        </footer>
    );
};