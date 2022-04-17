import { Container, Heading, Text, Tab } from '../components/shared';

const About = () => {
  return (
    <div className="about">
      <Container>
        <Heading>Hello 👋</Heading>
        <Text>
          <Tab />
          My name is Bohdan and this is first public version of my portfolio |
          blog. Unfortunately, if you reading this text, the website is still in
          development. But the good news are that the planned release date is
          <strong> September 1st, 2022.</strong>
          <hr />
          <Tab />
          Інформація для українських читачів - українська мова на сайті буде, я
          додам вибір мови і також старатимусь писати статті одразу двома мовами
          🇺🇦 🇬🇧. Проте з&apos;явиться така функція лише тоді, як я додам перший
          реальний контент.
        </Text>
      </Container>
    </div>
  );
};

export default About;
