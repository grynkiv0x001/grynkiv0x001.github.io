import { ContactLink, ThemeToggle } from '@/components';

export const Header = () => (
  <header className="border-b border-slate-900 dark:border-slate-100 pb-4 mb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div className="flex items-start justify-between md:justify-start">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Bohdan Hrynkiv</h1>
          <p className="text-lg md:text-xl font-semibold">Software Engineer</p>
        </div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>

      <div className="md:col-span-1 lg:col-span-1 flex items-start justify-between md:justify-between">
        <ul className="space-y-1 text-sm md:text-base">
          <ContactLink
            text="+1 (312) 292-84345"
            href="tel:+131229284345"
            copyText="+131229284345"
            hasCopyIcon
            isListItem
          />
          <ContactLink
            text="grynkiv0x001@gmail.com"
            href="mailto:grynkiv0x001@gmail.com"
            copyText="grynkiv0x001@gmail.com"
            hasCopyIcon
            isListItem
          />
        </ul>

        <div className="hidden md:block lg:hidden">
          <ThemeToggle />
        </div>
      </div>

      <div className="hidden lg:flex items-start justify-end gap-4">
        <ThemeToggle />
      </div>
    </div>
  </header>
);

