// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewAurora title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewAurora/i);
    expect(titleElement).toBeInTheDocument();
});
