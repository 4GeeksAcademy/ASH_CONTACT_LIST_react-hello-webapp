import React, {useState, useEffect, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

function ContactForm() {
        const {store, actions} = useContext(Context);
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [address, setAddress] = useState("");
        const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !address) {
            alert("Please fill in all fields");
            return;
        }
        actions.crearContacto(name, phone, email, address);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        navigate("/");
        };

        return (
                <div className="d-flex justify-content-center">
                <form className="container-fluid" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter Full Name" id="exampleInputName" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter Email" id="exampleInputEmail1" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="Enter Phone" id="exampleInputPhone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Enter Address" id="exampleInputAddress" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <div className="container-fluid m-0 p-0">
                        <button type="submit" className="btn btn-primary w-100 m-0 p-0">Save</button>
                    </div>
                    <div className="container-fluid d-flex justify-content-start px-0">
                        <Link to="/" className="btn btn-sm btn-link px-0">Back to contacts</Link>
                    </div>
    
                </form>
                </div>
        )
        
    };

    export default ContactForm;