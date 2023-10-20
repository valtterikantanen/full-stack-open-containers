import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

const todo = {
  text: 'Write code',
  done: false
};

const mockHandler = jest.fn();

test('renders content of the todo', function () {
  render(<Todo todo={todo} onClickComplete={mockHandler} onClickDelete={mockHandler} />);

  const element = screen.getByText('Write code');
  expect(element).toBeDefined();
});

test('renders correct status when todo is not done', function () {
  render(<Todo todo={todo} onClickComplete={mockHandler} onClickDelete={mockHandler} />);

  const element = screen.getByText('This todo is not done');
  expect(element).toBeDefined();
});

test('renders set as done button when todo is not done', function () {
  render(<Todo todo={todo} onClickComplete={mockHandler} onClickDelete={mockHandler} />);

  const button = screen.getByText('Set as done');
  expect(button).toBeDefined();
});
