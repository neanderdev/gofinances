import React, { ReactNode } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { Register } from '.';

import theme from '../../global/styles/theme';

interface ProviderProps {
    children: ReactNode;
}

function Provider({ children }: ProviderProps) {
    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </NavigationContainer>
    );
}

describe('Register Screen', () => {
    it('should be open category modal when user click on button', async () => {
        const { getByTestId } = render(
            <Register />,
            {
                wrapper: Provider,
            }
        );

        const categoryModal = getByTestId('modal-category');
        const categoryButton = getByTestId('button-category');

        fireEvent.press(categoryButton);

        await waitFor(() => {
            expect(categoryModal.props.visible).toBeTruthy()
        }, { timeout: 1000 })
    });
});