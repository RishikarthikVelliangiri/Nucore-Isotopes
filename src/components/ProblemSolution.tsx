"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section id="solutions" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Problem Side */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-semibold uppercase tracking-wide">
                            <AlertTriangle className="w-3 h-3" /> The Challenge
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            Global Supply Chains Are <span className="text-rose-500">Fragile.</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Medical isotopes are essential for diagnosing and treating cancer. Yet, the global supply relies on aging reactors and complex logistics.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Aging core infrastructure at risk of shutdown",
                                "Complex cross-border logistics causing delays",
                                "Short half-lives leading to supply decay"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                    <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-rose-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution Side */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-sky-50 rounded-3xl -rotate-2 scale-105" />
                        <div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-primary text-xs font-semibold uppercase tracking-wide mb-6">
                                <CheckCircle2 className="w-3 h-3" /> The NuCore Solution
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Domestic Reliability</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                NuCore utilizes existing domestic infrastructure and proven modular processes to accelerate production without the decade-long construction timelines.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary font-bold">1</div>
                                    <div>
                                        <div className="font-semibold text-slate-900">Proven Process</div>
                                        <div className="text-sm text-slate-500">No experimental physics risk</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary font-bold">2</div>
                                    <div>
                                        <div className="font-semibold text-slate-900">Scalable Output</div>
                                        <div className="text-sm text-slate-500">Modular expansion on demand</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
