import React from 'react';

const ContactPage = (props) => {
    return (
        <div>
            <h1>A Thing I have Done</h1>
            <p>This page is for the item with the id of {props.match.params.id}</p>
        </div>
    )
}

export default ContactPage;