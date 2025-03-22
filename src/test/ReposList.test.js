import { render, screen } from '@testing-library/react';
import ReposList from './component/ReposList';

test('renders repository list', () => {
  render(<ReposList />);
  const linkElement = screen.getByText(/GoDaddy Repositories/i);
  expect(linkElement).toBeInTheDocument();
});