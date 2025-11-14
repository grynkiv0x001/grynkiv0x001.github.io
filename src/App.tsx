import { Education, Experience, Personal, Projects } from '@/components';

function App() {
  return (
    <div className="p-4 flex flex-col h-lvh overflow-auto gap-8 md:p-8 bg-slate-50 dark:bg-slate-950 fill-slate-950 text-slate-950 dark:text-slate-50">
      <Personal />

      <h1 className="hidden md:block text-6xl lg:text-9xl">Portfolio</h1>

      <Experience />

      <Education />

      <Projects />
    </div>
  );
}

export default App;
