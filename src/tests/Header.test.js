import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header/Header';

test('HEADER: renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

test('HEADER: renders my name in react link (from left side of the header)', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Roxana Scraba/i);
  expect(linkElement).toBeInTheDocument();
});
