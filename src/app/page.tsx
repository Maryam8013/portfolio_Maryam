import {
  Navbar,
  Hero,
  About,
  Projects,
  Experience,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="noise">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
