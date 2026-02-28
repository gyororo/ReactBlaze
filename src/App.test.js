// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ReactBlaze title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ReactBlaze/i);
    expect(titleElement).toBeInTheDocument();
});
