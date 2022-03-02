import { useState, useEffect } from "react"
import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getSingleUser, updateUser } from "../redux/actions"

const Updateuser = () => {

    const [state, setState] = useState({
        name: "",
        address: "",
        email: "",
        contact: "",
    });

    let history = useHistory();
    const {user} = useSelector(state => state.data);
    let dispatch = useDispatch();
    let {id} = useParams();
    const { name, address, email, contact } = state;

    const handleInputChange = (e) =>{
            let {name, value} = e.target;
            setState({...state, [name]: value})
    }

    useEffect(() =>{
        dispatch(getSingleUser(id));
    },[]);

    useEffect(() =>{
        if(user){
            setState({...user});
        }
    },[user]);

    const [error, setError] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !address || !email || !contact){
            setError("Please input in all fields");
        }
        else{
            dispatch(updateUser(state, id));
            history.push("/");
            setError("");
        }
    };

    return (
        <div className="container  my-3">
            <h2>Update User</h2>
            {error && <h3 style={{color: "red"}}>{error}</h3>}
            <form className="col-md-4 mt-10" onSubmit={handleSubmit}>

                <div className="row mb-3">
                    <label htmlFor="name " className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" value={name || ""} onChange={handleInputChange} className="form-control" id="name" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input type="text" name="address" onChange={handleInputChange} value={address || ""} className="form-control" id="address" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" name="email" value={email || ""} onChange={handleInputChange} className="form-control" id="email" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="contact" className="col-sm-2 col-form-label">Contact</label>
                    <div className="col-sm-10">
                        <input type="text" name="contact" value={contact || ""} onChange={handleInputChange} className="form-control" id="contact" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default Updateuser
