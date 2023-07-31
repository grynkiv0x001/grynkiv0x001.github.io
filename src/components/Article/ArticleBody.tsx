import ReactMarkdown from 'react-markdown';

import './article-body.scss';

type ArticleBodyProps = {
  article: string;
};

const ArticleBody = ({ article }: ArticleBodyProps) => {
  if (!article) return null;

  return (
    <ReactMarkdown
      className="article-body"
      linkTarget="_blank"
    >
      {article}
    </ReactMarkdown>
  );
};

export default ArticleBody;
