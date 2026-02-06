import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import IsotopeGrid from "@/components/IsotopeGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <IsotopeGrid />

      {/* Why It Matters / Stats Section */}
      <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Healthcare Infrastructure Matters</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-16">
            Reliable isotope supply strengthens healthcare systems, improves patient outcomes, and reduces dependence on fragile global supply chains.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">40M+</div>
              <div className="text-sm text-slate-400">Annual Nuclear Medicine Procedures</div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold text-accent mb-2">99%</div>
              <div className="text-sm text-slate-400">Reliability Target</div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold text-emerald-400 mb-2">ZERO</div>
              <div className="text-sm text-slate-400">Carbon Emissions</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
