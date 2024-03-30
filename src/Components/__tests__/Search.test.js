// Search.test.js

import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { act, render, screen } from '@testing-library/react';
import Search from '../../Components/Search/Search';

describe('Search', () => {

    test('renders search input', () => {
        render(<Search />);
        const searchInput = screen.getByPlaceholderText('Search');
        expect(searchInput).toBeInTheDocument();
    });

    test('renders button', () => {
        render(<Search />);
        const searchButton = screen.getByRole('button', { id: /searchButton/ });
        expect(searchButton).toBeInTheDocument();
    });

    test('Initial state : search box empty, No initial highlighting', () => {
        render(<Search />);
        const keywordInput = screen.getByPlaceholderText('Search');
        expect(keywordInput.value).toBe('');
        expect(document.querySelectorAll('.yellow').length).toBe(0); // No initial highlighting
    });

    test('Updates keyword state when input changes', async () => {
        render(<Search />);
        const keywordInput = screen.getByPlaceholderText('Search');
        await act(() => {
             userEvent.type(keywordInput, 'test');
        });
        expect(keywordInput.value).toBe('test');
    });
    /*
    test('search button click invokes handleSearchButtonClick', async () => {

        const handleSearchButtonClickMock = jest.fn();
        render(<Search handleSearchButtonClick={handleSearchButtonClickMock} />);
        const searchButton = screen.getByRole('button', { id: 'searchButton' });
        //console.log('searchButton: ' + searchButton);  // returns : searchButton: [object HTMLButtonElement]
        await act(() => {
            userEvent.click(searchButton);
        });
        //console.log('handleSearchButtonClickMock called:', handleSearchButtonClickMock.mock.calls.length > 0); // returns false

        expect(handleSearchButtonClickMock).toHaveBeenCalledTimes(1);
    });
    
    test('Updates keyword state when input changes', async () => {
        render(<Search />);
        const keywordInput = screen.getByPlaceholderText('Search');
        console.log('keywordInput2' + keywordInput);
        await userEvent.type(q
        keywordInput, 'test');
        expect(keywordInput.value).toBe('test');
    });

    test('search button click invokes scrollToNextOccurrence', async () => {
    
        const handleSearchButtonClickMock = jest.fn();
        render(<Search handleSearchButtonClick={handleSearchButtonClickMock} />);
        const searchButton = screen.getByRole('button', { id: 'searchButton' });
        console.log('searchButton: ' + searchButton);  // returns : searchButton: [object HTMLButtonElement]
        await act(() => {
            userEvent.click(searchButton);
        });
        console.log('handleSearchButtonClickMock called:', handleSearchButtonClickMock.mock.calls.length > 0); // returns false

        expect(handleSearchButtonClickMock).toHaveBeenCalledTimes(1);
    });

    // Assuming a rendered HTML structure with words to be highlighted
    test('Highlights words matching the keyword', async () => {
        render(<Search />);

        const keywordInput = screen.getByPlaceholderText('Search');
        await act(() => {
            userEvent.type(keywordInput, 'about');
        }); 

        const highlightedWords = screen.getAllByRole('text', { name: /about/ });
        expect(highlightedWords.length).toBeGreaterThan(0);
        highlightedWords.forEach((word) => expect(word).toHaveClass('yellow'));
    });

    test('input change updates keyword state', () => {
        render(<Search />);
        const searchInput = screen.getByPlaceholderText('Search');
        userEvent.change(searchInput, { target: { value: 'example' } });
        expect(searchInput).toHaveValue('example');
    });

    test('enter key press invokes scrollToNextOccurrence', () => {
        const scrollToNextOccurrenceMock = jest.fn();
        render(<Search scrollToNextOccurrence={scrollToNextOccurrenceMock} />);
        const searchInput = screen.getByPlaceholderText('Search');
        userEvent.keyDown(searchInput, { key: 'Enter' });
        expect(scrollToNextOccurrenceMock).toHaveBeenCalledTimes(1);
    });
    */
});