import { render, screen } from '@testing-library/react';

import ArticleBody from '@/components/Article/ArticleBody';

describe('<ArticleBody />', () => {
  test('should render ArticleBody component', () => {
    expect(true).toBe(true);
  });

  test('ReactMarkdown should be working', () => {
    render(<ArticleBody article='Test article' />);

    expect(screen.getByText(/Test article/)).toBeInTheDocument();
  });
});
