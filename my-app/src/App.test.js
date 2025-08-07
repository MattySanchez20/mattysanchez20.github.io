import { render, screen } from '@testing-library/react';
import App from './App';

test('renders data engineer portfolio', () => {
  render(<App />);
  const titleElement = screen.getByText(/Data Engineer/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsElement = screen.getByText(/Featured Projects/i);
  expect(projectsElement).toBeInTheDocument();
});

test('renders skills section', () => {
  render(<App />);
  const skillsElement = screen.getByText(/Technical Skills/i);
  expect(skillsElement).toBeInTheDocument();
});
