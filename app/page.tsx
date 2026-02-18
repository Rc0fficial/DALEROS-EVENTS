import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingEvent from "@/components/UpcomingEvent";
import WhyDaleros from "@/components/WhyDaleros";
import StatBar from "@/components/StatBar";
import SponsorshipCTA from "@/components/SponsorshipCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <UpcomingEvent />
      <WhyDaleros />
      <StatBar />
      <SponsorshipCTA />
      <Footer />
    </main>
  );
}
