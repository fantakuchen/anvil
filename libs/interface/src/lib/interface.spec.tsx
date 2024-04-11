import { render } from '@testing-library/react';

import Interface from './interface';
import React from 'react';

describe('Interface', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Interface />);
    expect(baseElement).toBeTruthy();
  });
});
