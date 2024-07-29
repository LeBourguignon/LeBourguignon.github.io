import React from "react";

export const UnderDev = () => {
    return (
        <div className="flex flex-grow flex-col items-center justify-center gap-4 lg:gap-8">
            <h1 className="text-4xl font-bold">🚧 En cours de construction 🚧</h1>
            <p className="text-lg text-muted-foreground">Cette page est actuellement en construction. N&apos;hésitez pas à revenir plus tard !</p>
        </div>
    );
}   