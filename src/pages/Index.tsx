
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContentSection from "@/components/ContentSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="content">
          <ContentSection />
        </section>
        <section id="connect">
          <SocialSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
