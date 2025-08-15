import { Education } from './components/education';
import { Experience } from './components/experience';
import { Personal } from './components/personal';
import { Projects} from './components/projects';

function App() {
  return (
    <div className="p-4 flex flex-col gap-8 md:p-8">
      <Personal />

      <h1 className="hidden md:block text-6xl lg:text-9xl">Portfolio</h1>

      <Experience />

      <Education />

      <Projects />

      <section>
        COMING SOON...
      </section>
    </div>
  );
}

export default App;
