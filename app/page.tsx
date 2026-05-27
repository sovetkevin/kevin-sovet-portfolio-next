import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HelloStickyBadge from '@/components/HelloStickyBadge';
import Header from '@/components/Header';
import StructuredData from '@/components/StructuredData';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="relative min-h-screen bg-[#eef7f7] dark:bg-[#0f1117] selection:bg-cyan-100 selection:text-cyan-900 dark:selection:bg-cyan-900/40 dark:selection:text-cyan-100">
        <HelloStickyBadge />
        <Header />
        <main className="max-w-[1600px] mx-auto">
          <Hero />
          <div className="bg-[#eef7f7] dark:bg-[#0f1117]">
            <Experience />
            <div id="portfolio">
              <Portfolio />
            </div>
            <Contact />
            <Footer />
          </div>
        </main>
        <BackToTop />
      </div>
    </>
  );
}