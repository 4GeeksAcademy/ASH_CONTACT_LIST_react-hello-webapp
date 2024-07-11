import React, {useState, useEffect, useContext} from "react";
import ContactCard from "../component/contact_card.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


    const Contact = () => {
        const {actions} = useContext(Context)
        
    useEffect (() => {
        actions.obtenerContactos();
    }, [])

    return (
        <div className="container p-5">
            <div className="container-fluid m-5 d-flex justify-content-end">
                <Link to="/add-contact" className="btn btn-success">Add new contact</Link>
            </div>
            <div className="d-flex justify-content-center">
                <ContactCard />
            </div>
        </div>

    )
    
};


export default Contact;
