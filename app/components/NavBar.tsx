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

    useEffect(() => {
        // Force dark mode always
        document.documentElement.classList.add("dark");
    }, []);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
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
                                className="relative text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            <TitleContainer />
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
