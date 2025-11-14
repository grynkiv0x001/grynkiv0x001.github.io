export const Experience = () => (
  <section className="border-t border-slate-900 dark:border-slate-100 pt-6 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div className="md:col-span-1 lg:col-span-1">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Experience</h3>
      </div>

      {/* TODO: Add opportunity to preview and download the resume */}

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
              Delivered major UI features for a financial web app serving 2 users across multiple
              EU countries, using React, TypeScript, and Next.js.
              Translated wireframes and UI specs into fully responsive, production-quality components
              using Emotion, shipping 10+ reusable components for the design system.
              Designed and implemented a Strapi-based CMS to manage static pages and blog
              content, reducing content deployment time by 60%.
              Led a successful front-end migration between card-issuing providers with zero downtime,
              affecting all active users.
              Conducted code reviews and contributed to internal UI best practices, improving code
              quality and team velocity.
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
              Built and maintained a multi-language Learning Management System (LMS) serving
              200K+ users across multiple European countries.
              Implemented and maintained a custom design system and Storybook component library
              with 40+ reusable components for UI consistency.
              Created responsive layouts and themes using Tailwind CSS and CSS Modules,
              supporting 5+ languages and multiple country-specific configurations.
              Optimized React Admin dashboards, improving loading performance by 40% and
              reducing bundle size by 25%.
              Collaborated directly with designers and backend teams using GraphQL + Apollo Client,
              integrating API endpoints for seamless data flow.
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
              Developed and maintained applications across B2B, Real Estate, and E-commerce
              sectors, contributing to 5+ production applications.
              Promoted from Junior Developer to Frontend Developer within 18 months, leading squads
              of 2-3 frontend engineers on key initiatives.
              Implemented real-time features using Firebase, Redux Saga, and WebSocket APIs,
              enabling live collaboration for 5K+ concurrent users.
              Led the frontend architecture of a U.S. B2B platform serving enterprise clients, defining
              routing, authentication flows, and scalable UI patterns.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
