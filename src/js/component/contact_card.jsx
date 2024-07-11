import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

function ContactCard() {
    const {store} = useContext(Context)

    return (
        <>
        {store.agenda.map((item) => (
        <div className="card d-flex m-2">
            <div className="d-flex m-2 justify-content-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="card-img-top" style={{ height: '60px', width: '60px' }} alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title" key={item.id}>{item.name}</h5>
                <p className="card-text" key={item.id}>{item.address}</p>
                <p className="card-text" key={item.id}>{item.phone}</p>
                <p className="card-text" key={item.id}>{item.email}</p>
                <div className="container-fluid d-flex">
                    <a href="#" className="btn btn-sm btn-link mx-2">Edit</a>
                    <a href="#" className="btn btn-sm btn-link mx-2">Remove</a>
                </div>
            </div>
        </div>))}
        </>)
    
};


export default ContactCard;