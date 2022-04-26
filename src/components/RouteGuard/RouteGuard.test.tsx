import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RouteGuard from './RouteGuard';

describe('<RouteGuard />', () => {
  test('it should mount', () => {
    render(<RouteGuard login={false} children={undefined} />);

    const routeGuard = screen.getByTestId('RouteGuard');

    expect(routeGuard).toBeInTheDocument();
  });
});