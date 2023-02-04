import { Container, Heading, Tab, Text } from '@/components/shared';

const Posts = () => {
  return (
    <div className="posts">
      <Container>
        <Heading>Timeline ✍️</Heading>
        <Text>
          <Tab />
          The idea of this project isn&apos;t just to advertising myself using
          website portfolio, but also create place where I can share my thoughts
          & help other people (developers) with their issues. So hopefully by
          the <strong title="September 1st, 2022">release date</strong>{' '}
          I&apos;ll be able to fill this page with some articles.
        </Text>
      </Container>
    </div>
  );
};

export default Posts;
