export const Footer = () => (
  <footer className="border-t border-slate-900 dark:border-slate-100 pt-6 mt-12 pb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div className="md:col-span-1 lg:col-span-1">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Contact</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>+436764970345</li>
          <li>
            <a href="mailto:grynkiv0x001@gmail.com" className="underline underline-offset-2">
              grynkiv0x001@gmail.com
            </a>
          </li>
        </ul>
      </div>
      
      <div className="md:col-span-1 lg:col-span-2">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Links</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>
            <a href="https://github.com/grynkiv0x001" className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

