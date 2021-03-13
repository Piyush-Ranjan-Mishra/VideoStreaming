
import { render, screen } from "@testing-library/react";
import HeroComponent from "../hero";

test("renders show fs1", () => {
  render(<HeroComponent />);
  const linkElement = screen.getByText(/fs1/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders show live", () => {
 render(<HeroComponent />);
   const linkElement = screen.getByText(/live/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders show timing", () => {
  render(<HeroComponent />);
  const linkElement = screen.getByText(/11:00a - 12:00p/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders show purchase button", () => {
  render(<HeroComponent />);
  const linkElement = screen.getByText(/purchase \$4.99/i);
  expect(linkElement).toBeInTheDocument();
});


test("renders show subscribe button", () => {
  render(<HeroComponent />);
  const linkElement = screen.getByText(/subscribe/i);
  expect(linkElement).toBeInTheDocument();
});