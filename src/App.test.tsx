import React from 'react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const renderApp = () => render(
    <MemoryRouter initialEntries={[{  }]}>
      <App />
    </MemoryRouter>
  );
  test('should render content...', async () => {
    renderApp();
    await waitFor(() => {
      const copyrightContainer = screen.getByTestId('copyright-container');
      expect(copyrightContainer).toBeInTheDocument();
    });

    await waitFor(() => {
      const navbarContainer = screen.getByTestId('navbar-container');
      expect(navbarContainer).toBeInTheDocument();
    });
  });
});