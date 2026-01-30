import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Skills } from '@/app/components/Skills';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
