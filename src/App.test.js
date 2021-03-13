import { render, screen } from '@testing-library/react';
import App from './App';

test('renders show fs1', () => {
  render(<App />);
  const linkElement = screen.getByText(/fs1/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders show live", () => {
  render(<App />);
  const linkElement = screen.getByText(/live/i);
  expect(linkElement).toBeInTheDocument();
});