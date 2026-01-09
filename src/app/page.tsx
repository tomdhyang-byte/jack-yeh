import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorityTimeline from "@/components/AuthorityTimeline";
import ServiceCards from "@/components/ServiceCards";
import Testimonials from "@/components/Testimonials";
import FooterCTA from "@/components/FooterCTA";

// Replace with actual Google Form URL before deployment
const FORM_URL = "https://tally.so/r/kdePDJ?utm_source=website&utm_medium=cta_button&utm_campaign=booking";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar formUrl={FORM_URL} />
      <HeroSection formUrl={FORM_URL} />
      <AuthorityTimeline />
      <ServiceCards />
      <Testimonials />
      <FooterCTA formUrl={FORM_URL} />
    </main>
  );
}
