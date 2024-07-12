import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";

const EditForm = (props) => {
    const {actions} = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !address) {
            alert("Please fill in all fields");
            return;
        }
        actions.editarContacto(props.id, name, phone, email, address);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        };

    useEffect(() => {
        setName(props.name);
        setEmail(props.email);
        setPhone(props.phone);
        setAddress(props.address);
    },[])

    return (
                <div className="modal fade" id={"staticBackdrop-"+props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                <button type="submit" className="btn btn-primary w-100 m-0 p-0" data-bs-dismiss="modal">Save Edits</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditForm