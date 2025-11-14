export const Header = () => (
  <header className="border-b border-slate-900 dark:border-slate-100 pb-4 mb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Bohdan Hrynkiv</h1>
        <p className="text-lg md:text-xl font-semibold">Software Engineer</p>
      </div>
      
      <div className="md:col-span-1 lg:col-span-1">
        <ul className="space-y-1 text-sm md:text-base">
          <li>+436764970345</li>
          <li>
            <a href="mailto:grynkiv0x001@gmail.com" className="underline underline-offset-2">
              grynkiv0x001@gmail.com
            </a>
          </li>
        </ul>
      </div>
      
      <div className="hidden lg:block text-right">
        <ul className="space-y-2 text-xl font-semibold">
          <li>Software engineer</li>
          <li>Songwriter</li>
          <li>Traveler</li>
        </ul>
      </div>
    </div>
  </header>
);

