"use client";

import { Atom } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 text-white">
                            <Atom className="w-6 h-6 text-primary" />
                            <span className="font-bold tracking-tight">NuCore Isotopes</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            Building a more reliable foundation for modern healthcare through advanced nuclear manufacturing.
                        </p>
                        <div className="text-sm">
                            &copy; {new Date().getFullYear()} NuCore Isotopes, Inc.
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Leadership</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">News</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Solutions</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Diagnostic Isotopes</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Therapeutic Isotopes</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Supply Chain</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li>123 Innovation Drive</li>
                            <li>Oak Ridge, TN 37830</li>
                            <li className="pt-4"><a href="mailto:info@nucoreisotpoes.com" className="text-white hover:text-primary">info@nucoreisotopes.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                    <p>Designed for the future of medicine.</p>
                </div>
            </div>
        </footer>
    );
}
