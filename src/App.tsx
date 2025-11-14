import { Education, Experience, Personal, Projects, Header, Skills, Achievements, Footer } from '@/components';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-6 md:py-8 lg:py-12">
        <Header />
        
        <Personal />

        <Experience />

        <Education />

        <Skills />

        <Achievements />

        <Projects />

        <Footer />
      </div>
    </div>
  );
}

export default App;
