import { render, screen } from '@testing-library/react';

import Posts from '@/pages/Posts';

describe('<Posts />', () => {
  test('should render Posts page', () => {
    render(<Posts />);

    expect(screen.getByText(/Timeline/)).toBeInTheDocument();
  });

  test('Input should not be rendered', () => {
    render(<Posts />);

    expect(screen.queryByRole('input')).not.toBeInTheDocument();
  });
});
