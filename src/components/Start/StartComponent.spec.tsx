import React from 'react';
import { render } from '@testing-library/react';

import StartComponent from './StartComponent';

describe('Start', () => {
    it('should render', () => {
        const { baseElement } = render(<StartComponent />);
        
        expect(baseElement).toBeTruthy();
    });
});