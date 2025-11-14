export const Projects = () => (
  <section className="border-t border-slate-900 dark:border-slate-100 pt-6 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div className="md:col-span-1 lg:col-span-1">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Projects</h3>
      </div>
      
      <div className="md:col-span-1 lg:col-span-2">
        <ul className="space-y-6">
          <li className="border-b border-slate-300 dark:border-slate-700 pb-4 last:border-b-0 last:pb-0">
            <a
              href="https://github.com/grynkiv0x001/vi-kanban"
              className="underline underline-offset-2 font-semibold text-base md:text-lg block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vi-kanban
            </a>
            <p className="text-sm md:text-base leading-relaxed">
              React based kanban app with focus on keyboard shortcuts and Vim support.
            </p>
          </li>
          
          <li className="border-b border-slate-300 dark:border-slate-700 pb-4 last:border-b-0 last:pb-0">
            <a
              href="https://github.com/grynkiv0x001/pomodoro-vue"
              className="underline underline-offset-2 font-semibold text-base md:text-lg block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pomodoro Vue
            </a>
            <p className="text-sm md:text-base leading-relaxed">
              Simple pomodoro timer using Vue 3.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
