// Navigation.test.js

/*
    Test each navigation link is working.
    'Home', 'About', 'Facilities', 'Location', 'Contact'
*/

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import NavLinks from '../../Components/Navigation/NavLinks';

// Function to set up common test environment

function setupNavLinks() {
    const scrollToSectionMock = jest.fn();
    const homeRef = jest.fn();
    const aboutRef = jest.fn();
    const facilitiesRef = jest.fn();
    const locationRef = jest.fn();
    const contactRef = jest.fn();

    render(
        <NavLinks
            homeRef={homeRef}
            aboutRef={aboutRef}
            facilitiesRef={facilitiesRef}
            locationRef={locationRef}
            contactRef={contactRef}
            scrollToSection={scrollToSectionMock}
        />
    );

    return {
        homeRef,
        aboutRef,
        facilitiesRef,
        locationRef,
        contactRef,
        scrollToSectionMock
    };
}

describe('NavLinks', () => {

    test('Navigation link "Home" is rendered', () => {
        const { homeRef } = setupNavLinks();
        const homeLinkElement = screen.getByText(/Home/);
        expect(homeLinkElement).toBeInTheDocument();
    });

    test('Navigation link "About" is rendered', () => {
        const { aboutRef } = setupNavLinks();
        const aboutLinkElement = screen.getByText(/About/);
        expect(aboutLinkElement).toBeInTheDocument();
    });

    test('Navigation link "Facilities" is rendered', () => {
        const { facilitiesRef } = setupNavLinks();
        const facilitiesLinkElement = screen.getByText(/Facilities/);
        expect(facilitiesLinkElement).toBeInTheDocument();
    });

    test('Navigation link "Location" is rendered', () => {
        const { locationRef } = setupNavLinks();
        const locationLinkElement = screen.getByText(/Location/);
        expect(locationLinkElement).toBeInTheDocument();
    });

    test('Navigation link "Contact" is rendered', () => {
        const { contactRef } = setupNavLinks();
        const contactLinkElement = screen.getByText(/Contact/);
        expect(contactLinkElement).toBeInTheDocument();
    });

    // Check onClick handlers are called correctly

    test('Navigation click Home link', async () => {
        const { homeRef, scrollToSectionMock } = setupNavLinks();
        const homeLinkElement = screen.getByText(/Home/);
        await userEvent.click(homeLinkElement);
        expect(scrollToSectionMock).toHaveBeenCalledWith(homeRef);
    });

    test('Navigation click About link', async () => {
        const { aboutRef, scrollToSectionMock } = setupNavLinks();
        const aboutLinkElement = screen.getByText(/About/);
        await userEvent.click(aboutLinkElement);
        expect(scrollToSectionMock).toHaveBeenCalledWith(aboutRef);
    });

    test('Navigation click Facilities link', async () => {
        const { facilitiesRef, scrollToSectionMock } = setupNavLinks();
        const facilitiesLinkElement = screen.getByText(/Facilities/);
        await userEvent.click(facilitiesLinkElement);
        expect(scrollToSectionMock).toHaveBeenCalledWith(facilitiesRef);
    });

    test('Navigation click Location link', async () => {
        const { locationRef, scrollToSectionMock } = setupNavLinks();
        const locationLinkElement = screen.getByText(/Location/);
        await userEvent.click(locationLinkElement);
        expect(scrollToSectionMock).toHaveBeenCalledWith(locationRef);
    });

    test('Navigation click Contact link', async () => {
        const { contactRef, scrollToSectionMock } = setupNavLinks();
        const contactLinkElement = screen.getByText(/Contact/);
        await userEvent.click(contactLinkElement);
        expect(scrollToSectionMock).toHaveBeenCalledWith(contactRef);
    });
   
});

