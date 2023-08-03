import { useState } from 'react';

import { ArticleBody } from '@/components/Article';
import { Container, Heading, Tab, Text } from '@/components/shared';
import useUser from '@/hooks/useUser';

const Posts = () => {
  const user = useUser();
  const [fileContent, setFileContent] = useState<string>('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    const reader = new FileReader();

    if (!file) return;

    reader.readAsText(file, 'UTF-8');

    reader.onload = (e) => {
      if (e.target?.result) {
        setFileContent(e.target.result.toString());
      }
    };
  };

  const uploadAvailable = !!user;

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
        {uploadAvailable && (
          <input type="file" accept='.md' onChange={handleFileUpload} />
        )}
        <ArticleBody article={fileContent} />
      </Container>
    </div>
  );
};

export default Posts;
