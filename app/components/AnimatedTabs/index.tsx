"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { styles } from "./styles";
import { AnimatedTabsProps, TabItem } from "./types";
import { defaultTabs } from "./data";

export const AnimatedTabs: React.FC<AnimatedTabsProps> = ({
    items = defaultTabs.slice(0, 3),
    defaultTab,
    className,
    onChange
}) => {
    const [selectedTab, setSelectedTab] = useState<TabItem>(defaultTab || items[0]);

    useEffect(() => {
        if (defaultTab) {
            setSelectedTab(defaultTab);
        }
    }, [defaultTab]);

    const handleTabChange = (tab: TabItem) => {
        setSelectedTab(tab);
        onChange?.(tab);
    };

    return (
        <div style={{ ...styles.container }} className={className}>
            <nav style={styles.nav}>
                <ul style={styles.tabsContainer}>
                    {items.map((item) => (
                        <motion.li
                            key={item.label}
                            initial={false}
                            animate={{
                                backgroundColor:
                                    item === selectedTab ? "#eee" : "#eee0",
                            }}
                            style={styles.tab}
                            onClick={() => handleTabChange(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div
                                    style={styles.underline}
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <main style={styles.iconContainer}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={styles.icon}
                    >
                        {selectedTab ? selectedTab.icon : "😋"}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default AnimatedTabs; 