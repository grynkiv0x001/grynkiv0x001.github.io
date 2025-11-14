export const Projects = () => (
  <section className="lg:grid grid-cols-3 gap-4">
    <div />
    <div />
    <div>
      <h3 className="mb-4 text-4xl">Projects / latest work</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col lg:flex-row gap-1">
          <a
            href="https://github.com/grynkiv0x001/vi-kanban"
            className="underline underline-offset-2 lg:whitespace-nowrap"
          >
            Vi-kanban
          </a>
          <p className="hidden lg:block">-</p>
          <p>React based kanban app with focus on keyboard shortcuts and Vim support.</p>
        </li>
        <li className="flex flex-col lg:flex-row gap-1">
          <a
            href="https://github.com/grynkiv0x001/pomodoro-vue"
            className="underline underline-offset-2 lg:whitespace-nowrap"
          >
            Pomodoro Vue
          </a>
          <p className="hidden lg:block">-</p>
          <p>Simple pomodoro timer using Vue 3.</p>
        </li>
      </ul>
    </div>
  </section>
);
