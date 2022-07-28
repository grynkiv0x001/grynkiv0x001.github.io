import { Container, Heading, Tab, Text } from '../components/shared';

const Works = () => {
  return (
    <div className="works">
      <Container>
        <Heading>My Projects ️💻</Heading>
        <Text>
          <Tab />
          Originally the idea of own portfolio website appeared in my head 3 or
          4 years ago. But it is definitely not the easiest task. I didn&apos;t
          want to create something fast & simple just because I need such thing.
          For me - nothing is better than bad. And the process of creating
          stable and usable version of such project will take me 4 months
          because I decided to do everything by myself, starting from the design
          to a custom bundle & build configuration.
        </Text>
      </Container>
    </div>
  );
};

export default Works;
