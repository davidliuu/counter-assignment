// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initCount = screen.getByTestId('count');
  expect(initCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'));
  const firstCount = screen.getByTestId('count');
  expect(firstCount).toHaveTextContent('1');

  fireEvent.click(screen.getByText('+'));
  const secondCount = screen.getByTestId('count');
  expect(secondCount).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('-'));
  const firstCount = screen.getByTestId('count');
  expect(firstCount).toHaveTextContent('-1');

  fireEvent.click(screen.getByText('-'));
  const secondCount = screen.getByTestId('count');
  expect(secondCount).toHaveTextContent('-2');
});
