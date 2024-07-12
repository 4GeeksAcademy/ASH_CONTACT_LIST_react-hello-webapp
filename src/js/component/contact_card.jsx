import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import EditForm from "./contact_form_edit.jsx";

function ContactCard(props) {
    const {actions} = useContext(Context)
    const navigate = useNavigate();

    return (
        <>
    <div className="card d-flex m-2">
        <div className="row g-0 align-items-center">
            <div className="col-auto d-flex justify-content-center p-2">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="card-img-top" style={{ height: '120px', width: '120px' }} alt="..." />
            </div>
            <div className="col">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.address}</p>
                    <p className="card-text">{props.phone}</p>
                    <p className="card-text">{props.email}</p>
                </div>
            </div>
            <div className="col-auto">
                <div className="d-flex flex-column align-items-end p-2">
                    <div>
                        <button type="button" className="btn btn-sm btn-link" data-bs-toggle="modal" data-bs-target={"#staticBackdrop-"+props.id}>
                            Edit
                        </button>
                        <button type="button" className="btn btn-sm btn-link"
                        onClick={() => {actions.borrarContacto(props.id);}}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <EditForm id={props.id} name={props.name} email={props.email} phone={props.phone} address={props.address} />
    </div>
</>)
    
};

export default ContactCard;