import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../components/HomePage';

test('HOMEPAGE: renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage />, div);
});

test('HOMEPAGE: renders my logo image on homepage', () => {
  render(<HomePage />);
  const logoElement = screen.getByAltText(/Roxana Scraba/i)
  expect(logoElement).toBeInTheDocument();
});
