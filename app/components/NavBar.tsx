"use client";
import { LampContainer } from "@/components/ui/lamp";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import TrueFocus from "@/components/ui/true-focus";

interface ThemeToggleProps {
    currentTheme: "light" | "dark";
    onToggle: () => void;
    className?: string;
}

function ThemeToggle({ currentTheme, onToggle, className = "" }: ThemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#548235] focus:ring-offset-2 ${currentTheme === "dark" ? "bg-[#548235]" : "bg-[#A8D08D]"
                } ${className}`}
            role="switch"
            aria-checked={currentTheme === "dark"}
        >
            <span className="sr-only">Toggle theme</span>
            <span
                className={`${currentTheme === "dark" ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
            <span className="absolute left-1 right-1 text-[10px] flex justify-between text-[#548235] dark:text-white">
                <span>☀️</span>
                <span>🌙</span>
            </span>
        </button>
    );
}

export function NavBar() {
    const navItems = [
        {
            name: "Projects",
            link: "/projects",
        },
        {
            name: "Work",
            link: "/work",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" || "light";
        setCurrentTheme(savedTheme);
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setCurrentTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <ThemeToggle
                            currentTheme={currentTheme}
                            onToggle={toggleTheme}
                        />
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <div className="flex items-center justify-center w-full py-2">
                                <ThemeToggle
                                    currentTheme={currentTheme}
                                    onToggle={() => {
                                        toggleTheme();
                                        setIsMobileMenuOpen(false);
                                    }}
                                />
                            </div>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            {/* <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Build lamps <br /> the right way
                </motion.h1> */}
            <TitleContainer />

            {/* Navbar */}
        </div>
    );
}

const TitleContainer = () => {
    return (
        <div className="container mx-auto p-8 pt-24 text-orange-400">
            <TrueFocus manualMode={false} sentence="La Doi Pasi de IT devlog" />
        </div>
    );
};
