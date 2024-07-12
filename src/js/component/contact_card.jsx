import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

function ContactCard() {
    const {store} = useContext(Context)

    return (
        <>
        {store.agenda.map((item) => (
    <div className="card d-flex m-2" key={item.id}>
        <div className="row g-0 align-items-center">
            <div className="col-auto d-flex justify-content-center p-2">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="card-img-top" style={{ height: '120px', width: '120px' }} alt="..." />
            </div>
            <div className="col">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.address}</p>
                    <p className="card-text">{item.phone}</p>
                    <p className="card-text">{item.email}</p>
                </div>
            </div>
            <div className="col-auto">
                <div className="d-flex flex-column align-items-end p-2">
                    <a href="#" className="btn btn-sm btn-link">Edit</a>
                    <a href="#" className="btn btn-sm btn-link">Remove</a>
                </div>
            </div>
        </div>
    </div>
))}
        </>)
    
};


export default ContactCard;