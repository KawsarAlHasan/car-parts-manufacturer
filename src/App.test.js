import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// https://manufacturer-website-server-side-y96m.vercel.app
// https://manufacturer-website-server-side-y96m.vercel.app
