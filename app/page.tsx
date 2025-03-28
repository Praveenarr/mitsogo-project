import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ManagementSolutions from "@/components/management-solutions"
import TrustedCompanies from "@/components/trusted-companies"
import TestimonialSection from "@/components/testimonial-section"
import SignupSection from "@/components/signup-section"
import ResourcesSection from "@/components/resources-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ManagementSolutions />
      <TrustedCompanies />
      <TestimonialSection />
      <SignupSection />
      <ResourcesSection />
      <Footer />
    </main>
  )
}

