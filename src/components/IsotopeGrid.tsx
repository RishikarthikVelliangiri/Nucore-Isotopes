"use client";

import { motion } from "framer-motion";
import { Microscope, Scan, Pill, Dna } from "lucide-react";

const applications = [
    {
        title: "Diagnostic Imaging",
        description: "Essential isotopes for SPECT and PET scans.",
        icon: Scan,
        color: "bg-sky-500",
    },
    {
        title: "Targeted Alpha Therapy",
        description: "Next-generation cancer treatments delivering precision radiation.",
        icon: Dna,
        color: "bg-violet-500",
    },
    {
        title: "Theranostics",
        description: "Combined therapy and diagnostics for personalized care.",
        icon: Microscope,
        color: "bg-indigo-500",
    },
    {
        title: "Radiopharmaceuticals",
        description: "Sterile, reliable inputs for drug manufacturing.",
        icon: Pill,
        color: "bg-rose-500",
    },
];

export default function IsotopeGrid() {
    return (
        <section id="applications" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Supporting Modern <span className="text-primary">Nuclear Medicine</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Our mission is to ensure physicians and patients have access when it matters most.
                        We focus on isotopes used in critical life-saving applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {applications.map((app, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${app.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <app.icon className={`w-6 h-6 ${app.color.replace('bg-', 'text-')}`} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{app.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{app.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
