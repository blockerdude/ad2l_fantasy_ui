import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OidcRedirectGuard from './OidcRedirectGuard';

describe('<OidcRedirectGuard />', () => {
  test('it should mount', () => {
    render(<OidcRedirectGuard />);
    
    const oidcRedirectGuard = screen.getByTestId('OidcRedirectGuard');

    expect(oidcRedirectGuard).toBeInTheDocument();
  });
});