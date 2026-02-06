"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Microscope, TrendingUp } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-slate-50 to-sky-50 overflow-hidden">
            {/* Abstract Medical Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-right" />
                {/* Soft blobs */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge Removed by Request */}

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Commercializing <br />
                        <span className="text-primary">Nuclear Medicine</span> <br />
                        at Speed
                    </h1>

                    <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed">
                        NuCore Isotopes is improving access to critical medical isotopes.
                        We deliver reliable, domestic supply for modern healthcare, ensuring
                        patient care is never compromised by fragile supply chains.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#solutions" className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-sky-600 transition-all shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.23)] hover:-translate-y-1">
                            Our Solution <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#applications" className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-all">
                            View Isotopes
                        </a>
                    </div>
                </motion.div>

                {/* Right Side Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full transform rotate-12" />
                    <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-primary">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900">Reliable</h3>
                                <p className="text-xs text-slate-500 mt-2">Consistent baseload production</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 text-accent">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900">Scalable</h3>
                                <p className="text-xs text-slate-500 mt-2">Rapid modular expansion</p>
                            </div>
                            <div className="col-span-2 bg-slate-900 p-6 rounded-xl shadow-lg relative overflow-hidden text-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Microscope className="w-24 h-24" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Domestic Production</h3>
                                <p className="text-sm text-slate-300">Reducing dependence on foreign supply chains.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
