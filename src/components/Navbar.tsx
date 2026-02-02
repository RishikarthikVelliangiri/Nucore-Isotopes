"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Atom } from "lucide-react";

const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Applications", href: "#applications" },
    { name: "About", href: "#about" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-slate-200 py-3"
                    : "bg-white border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Atom className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        NuCore <span className="text-slate-500 font-normal">Isotopes</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-sky-600 rounded-lg transition-colors shadow-sm"
                    >
                        Contact Sales
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-slate-600 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="text-center px-5 py-3 text-base font-semibold text-white bg-primary rounded-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Sales
                    </Link>
                </div>
            )}
        </nav>
    );
}
