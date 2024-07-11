import React, {useState, useEffect, useContext} from "react";
import ContactCard from "../component/contact_card.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


    const AddContact = () => {
        const {actions} = useContext(Context)
        
    useEffect (() => {
        actions.obtenerAgenda();
    }, [])

    return (
        <div className="container p-5">
            <div className="container-fluid m-5 d-flex justify-content-center">
                <h1>Add a new contact</h1>
            </div>
            <div className="d-flex justify-content-center">
            <form className="container-fluid">
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" id="exampleInputName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPhone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" placeholder="Enter Phone" id="exampleInputPhone" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" id="exampleInputName" aria-describedby="emailHelp" />
                </div>
                <div className="container-fluid m-0 p-0">
                    <button type="submit" className="btn btn-primary w-100 m-0 p-0">Save</button>
                </div>
                <div className="container-fluid d-flex justify-content-start px-0">
                    <Link to="/" className="btn btn-sm btn-link px-0">Back to contacts</Link>
                </div>

            </form>
            </div>
        </div>

    )
    
};


export default AddContact;