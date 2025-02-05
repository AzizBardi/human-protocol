import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { FaucetView } from '../FaucetView';
import { MemoryRouter } from 'react-router-dom';

describe('when rendered AfterConnect component', () => {
  it('should render `text` prop', async () => {
    await act(async () => {
      render(<FaucetView />, { wrapper: MemoryRouter });
    });
    expect(screen.getByText(/HUMAN Faucet for testnet/)).toBeInTheDocument();
  });
});

it('AfterConnect component renders correctly, corresponds to the snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <FaucetView />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
