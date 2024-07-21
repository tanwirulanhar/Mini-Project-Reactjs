jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({}),
  useLocation: jest.fn().mockReturnValue({}),
  useNavigate: jest.fn(),
}));


import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home'; // Pastikan path ini benar

describe('Home', () => {
  it('renders Home component', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});


