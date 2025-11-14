import { ContactLink } from '@/components';

export const Footer = () => (
  <footer className="border-t border-slate-900 dark:border-slate-100 pt-6 mt-12 pb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div className="md:col-span-1 lg:col-span-1">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Contact</h3>
        <div className="md:col-span-1 lg:col-span-1">
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
        </div>
      </div>

      <div className="md:col-span-1 lg:col-span-2">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Links</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>
            <a
              href="https://github.com/grynkiv0x001"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bohdan-hrynkiv-47906614a/"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
