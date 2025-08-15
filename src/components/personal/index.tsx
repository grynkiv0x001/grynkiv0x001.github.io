export const Personal = () => (
  <section className="lg:grid lg:grid-cols-3 lg:justify-between">
    <main>
      <h2 className="text-5xl">Bohdan Hrynkiv</h2>
      <ul>
        <li>+436764970345</li>
        <li>grynkiv0x001@gmail.com</li>
      </ul>
    </main>

    <div>
      <p>
        A software engineer with a background in computer science.
        I have strong soft skills and I feel passionate about technologies.
        I'm using JavaScript, TypeScript, React, Next, Redux, Vue.js, GraphQL, Tailwind, SCSS, HTML.
        Also, I am familiar with many related technologies.
        I like to make music and travel the world.
      </p>
    </div>

    <div className="hidden lg:block text-right">
      <ul>
        <li className="text-4xl">Software engineer</li>
        <li className="text-4xl">Songwriter</li>
        <li className="text-4xl">Traveler</li>
      </ul>
    </div>
  </section>
);
