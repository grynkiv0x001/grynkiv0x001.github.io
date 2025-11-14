import { ResumeDownload } from '@/components/resume-download';

export const Experience = () => (
  <section className="border-t border-slate-900 dark:border-slate-100 pt-6 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div className="md:col-span-1 lg:col-span-1">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Experience</h3>
        <ResumeDownload />
      </div>

      <div className="md:col-span-1 lg:col-span-2">
        <ul className="space-y-6">
          <li className="border-b border-slate-300 dark:border-slate-700 pb-4 last:border-b-0 last:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
              <div>
                <strong className="text-base md:text-lg font-semibold block mb-1">React Engineer</strong>
              </div>
              <div>
                <p className="text-sm md:text-base">Twisto | FinTech</p>
              </div>
              <div>
                <p className="text-sm md:text-base italic">Oct 2024 - Present</p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              I currently contribute to the core features of a financial web application that serving millions of users across multiple EU countries.
              Working with React, TypeScript, and Next.js, I translate wireframes and design specifications into fully responsive, production-ready components using Emotion.
              I've shipped over 10 reusable components that now form part of our design system.
              One of my major achievements was designing and implementing a Strapi-based CMS that manages our static pages and blog content, reducing content deployment time by 60%.
              I also led a critical front-end migration between card-issuing providers that affected all active users while maintaining zero downtime.
              In addition to developing features, I conduct code reviews and help establish UI best practices, improving both code quality and team velocity.
            </p>
          </li>

          <li className="border-b border-slate-300 dark:border-slate-700 pb-4 last:border-b-0 last:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
              <div>
                <strong className="text-base md:text-lg font-semibold block mb-1">React Developer</strong>
              </div>
              <div>
                <p className="text-sm md:text-base">Laba Group | EdTech & LMS</p>
              </div>
              <div>
                <p className="text-sm md:text-base italic">Feb 2023 – Jul 2024</p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              I built and maintained a multi-language Learning Management System serving over 200,000 users across Europe.
              I focused on creating a cohesive user experience through a custom design system and Storybook component library containing 40+ reusable components.
              Using Tailwind CSS and CSS Modules, I developed responsive layouts and themes that support multiple projects and multiple country-specific configurations.
              I focused heavily on performance optimization, improving React Admin dashboard loading times by 40%.
              Working closely with designers and backend teams, I've integrated GraphQL and Apollo Client to ensure seamless data flow throughout the application.
            </p>
          </li>

          <li className="border-b border-slate-300 dark:border-slate-700 pb-4 last:border-b-0 last:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
              <div>
                <strong className="text-base md:text-lg font-semibold block mb-1">Software Engineer, Mentor</strong>
              </div>
              <div>
                <p className="text-sm md:text-base">Five Systems Development</p>
              </div>
              <div>
                <p className="text-sm md:text-base italic">Aug 2020 – Feb 2023</p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              I developed and maintained applications across B2B, Real Estate, and E-Commerce sectors, contributing to over five production applications.
              My growth was rapid – I was promoted from Junior Developer to Frontend Developer within 18 months and went on to lead small teams of 2-3 frontend engineers on key initiatives.
              I implemented real-time features using Firebase, Redux Saga, and WebSocket APIs that enabled live collaboration for thousands concurrent users.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
