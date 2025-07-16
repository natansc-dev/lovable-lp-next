import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SplashCursor />
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
