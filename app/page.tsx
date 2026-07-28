import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background selection:bg-primary/20 selection:text-primary">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with Video Background */}
      <main className="flex-1">
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
