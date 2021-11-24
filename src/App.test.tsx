import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  const { getByText } = render(
    <div >
      <App />
    </div>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
