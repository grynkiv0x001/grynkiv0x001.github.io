export const Skills = () => (
  <section className="border-t border-slate-900 dark:border-slate-100 pt-6 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div className="md:col-span-1 lg:col-span-1">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Skills</h3>
      </div>
      
      <div className="md:col-span-1 lg:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Frontend</h4>
            <ul className="space-y-1 text-sm md:text-base">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>Vue.js</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Styling & Tools</h4>
            <ul className="space-y-1 text-sm md:text-base">
              <li>Tailwind CSS</li>
              <li>SCSS</li>
              <li>HTML</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

