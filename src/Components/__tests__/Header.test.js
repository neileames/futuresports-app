// Header.test.js

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../App.css';
import Header from '../../Components/Header/Header';

describe('Header', () => {

    test('Check if logo is rendered', () => {
        render(<Header />);
        const logoElement = screen.getByAltText("Future Sports company logo");
        expect(logoElement).toBeInTheDocument();
    });

    test('Check if search input is rendered', () => {
        render(<Header />);
        const searchElement = screen.getByPlaceholderText("Search");
        expect(searchElement).toBeInTheDocument();
    });

    test('Check if the hamburger menu is in the document', async () => {
        const result = await render(<Header />);
        const hamburgerElement = result.container.querySelector('#hamburger_image');
        expect(hamburgerElement).toBeInTheDocument();
    });

    test('Check if the hamburger menu is visible', async () => {
        const result = await render(<Header />);
        const hamburgerElement = result.container.querySelector('#hamburger_image');
        expect(hamburgerElement).toBeVisible();
    });
    
});

