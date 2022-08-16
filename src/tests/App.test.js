import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

describe('Testa o App.js', () => {
  test('Verificar se tem o texto Buscar', () => {
    render(<App />);

    const text= screen.getByText(/Buscar/i);
    expect(text).toBeInTheDocument();
  });
});