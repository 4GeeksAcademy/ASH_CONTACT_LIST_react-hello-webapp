import React from "react";
import ContactForm from "../component/contact_form.jsx";

    const AddContact = () => {
        
    return (
        <div className="container p-5">
            <div className="container-fluid m-5 d-flex justify-content-center">
                <h1>Add a new contact</h1>
            </div>
            <ContactForm />
        </div>

    )
    
};


export default AddContact;