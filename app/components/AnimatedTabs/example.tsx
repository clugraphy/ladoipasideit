"use client";

import { AnimatedTabs } from "./index";
import { defaultTabs } from "./data";

export const AnimatedTabsExample = () => {
    const customTabs = defaultTabs.slice(0, 3);

    return (
        <div className="w-full max-w-lg mx-auto p-4">
            <AnimatedTabs
                items={customTabs}
                onChange={(tab) => console.log("Selected tab:", tab)}
                className="shadow-xl"
            />
        </div>
    );
}; 