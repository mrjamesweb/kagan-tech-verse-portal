
import Header from "@/components/Header";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

const Content = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Content;
