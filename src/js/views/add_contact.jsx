import React, {useState, useEffect, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import ContactForm from "../component/contact_form.jsx";

    const AddContact = () => {
        
    useEffect (() => {
        // actions.obtenerContactos();
    }, [])

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