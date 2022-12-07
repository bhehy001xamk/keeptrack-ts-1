import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renderöityykö App ilman kaatumista', () => {
  render(<App />);
});
