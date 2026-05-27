import { HeroSection } from "@/components/hero-section";
import { PositionsSection } from "@/components/positions-section";
import { CasualReferralSection } from "@/components/casual-referral-section";
import { HowToSection } from "@/components/how-to-section";
import { PaymentSection } from "@/components/payment-section";
import { ClosingSection } from "@/components/closing-section";
import { Footer } from "@/components/footer";

export default function ReferralPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PositionsSection />
      <CasualReferralSection />
      <HowToSection />
      <PaymentSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}
