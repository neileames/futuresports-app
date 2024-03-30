// contact.js

import React from 'react';

import withFormHandling from './withFormHandling';

const Contact = React.forwardRef((props, ref) => {

    const { formData, errorMessage, handleInputChange, handleSubmit } = props; // Destructure props to get the required variables

    const fields = [
        { name: "name", element: "input", type: "text" },
        { name: "email", element: "input", type: "text" },
        { name: "message", element: "textarea" }
    ];

    return (
        <div ref={ref} className="section">
            <h2>Contact Us</h2>
            <a href="mailto:contact@futuresports.com">Send an Email</a>
            <br /><br />
            <p>or fill out the contact form.</p>
            <br />
            <form id="frm_contact" onSubmit={handleSubmit}>
                {fields.map(field => (
                    <div key={field.name}>
                        <label htmlFor={field.name} style={{ textTransform: 'capitalize' }}>{field.name}: </label>
                        {field.element === "input" ? (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleInputChange}
                                required
                            />
                        ) : (
                            <textarea
                                id={field.name}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleInputChange}
                                required
                            />
                        )}
                        <br /><br />
                    </div>
                ))}
                <br />
                <button id="btn_submit" type="submit">Submit</button>
            </form>
            {errorMessage && <p className="error-message red">{errorMessage}</p>}
        </div>
    );
});

// Apply the form handling HOC to the Contact component
export default withFormHandling(Contact);