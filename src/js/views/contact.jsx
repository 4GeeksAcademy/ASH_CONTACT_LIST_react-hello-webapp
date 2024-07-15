import React, {useEffect, useContext} from "react";
import ContactCard from "../component/contact_card.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

    const Contact = () => {
        const {store, actions} = useContext(Context)
        
    useEffect (() => {
        actions.obtenerContactos();
    }, [])
    console.log(store.agenda);
    return (
        <div className="container p-5">
            <div className="container-fluid my-3 d-flex justify-content-center">
                <Link to="/add-contact" className="btn btn-success w-100">+ Add new contact</Link>
            </div>
            <div className="">
            {store.agenda.map((item) => {
                return (
                    <ContactCard key={item.id} id={item.id} name={item.name} email={item.email} phone={item.phone} address={item.address} />
                )
            } )}
            </div>
        </div>

    )
    
};

export default Contact;