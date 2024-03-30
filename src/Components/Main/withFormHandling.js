// withFormHandling.js

import React from 'react';

const withFormHandling = (WrappedComponent) => {
    return React.forwardRef((props, ref) => {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });
        const [errorMessage, setErrorMessage] = React.useState('');

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

        const handleSubmit = (event) => {
            event.preventDefault(); // Prevent default form submission behavior

            // Regular expression for a valid email format
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!formData.name) {
                setErrorMessage('Please enter your name');
            } else if (!formData.email) {
                setErrorMessage('Please enter your email address');
            } else if (!formData.message) {
                setErrorMessage('Please enter your message');
            } else if (!emailRegex.test(formData.email)) {
                setErrorMessage('Email address is invalid');
            } else {
                alert(`Thank you, ${formData.name}, for your message!\n We will reply to ${formData.email} as soon as possible.`);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setErrorMessage('');
            }
        };

        return (
            <WrappedComponent
                {...props}
                ref={ref}
                formData={formData}
                errorMessage={errorMessage}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
        );
    });
};

export default withFormHandling;
