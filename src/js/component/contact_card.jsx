import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";


function ContactCard() {
    const {store, actions} = useContext(Context)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [id, setId] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !address) {
            alert("Please fill in all fields");
            return;
        }
        actions.editarContacto(id, name, phone, email, address);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        navigate("/");
        };


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
                    <div>
                        <button type="button" className="btn btn-sm btn-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                        onClick={setId(item.id)}
                        //  onClick={() => {handleClickEditId(item.id); handleClickEditLabel(item.label)}}
                         >
                            Edit
                        </button>
                        <button type="button" className="btn btn-sm btn-link"
                        // onClick={() => {borrarTareas(item.id);}}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Current Contact</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="container-fluid" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" placeholder="Enter Full Name" id="exampleInputName" value={item.name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter Email" id="exampleInputEmail1" value={item.email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                                <input type="text" className="form-control" placeholder="Enter Phone" id="exampleInputPhone" value={item.phone} onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" placeholder="Enter Address" id="exampleInputAddress" value={item.address} onChange={(e)=>setAddress(e.target.value)}/>
                            </div>
                            <div className="container-fluid m-0 p-0">
                                <button type="submit" className="btn btn-primary w-100 m-0 p-0">Save Edits</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    
))}
        </>)
    
};


export default ContactCard;