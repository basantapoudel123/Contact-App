import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import RootReducer from '../../redux';



const AddContact = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[number, setNumber] = useState("");

    const contacts = useSelector((state) => state.contacts);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email
            && email);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number)
            && number);

        if(!name || !email || !number){
            return toast.warning("Please fill in all Field!!!")
        }
        if(checkEmail){
            return toast.error("Email already Exists !!!")
        }

         if(checkNumber){
            return toast.error("Number already Exists !!!")
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }
        dispatch({type: "ADD_CONTACT", payload: data});
        toast.success("Student added Successfully !!")
        navigate("/");
    }
  return (
     <div className='container'>
        <div className="row">
            <h1 className="display-3 text-center my-5">
                Add Student
            </h1>
            <div className="col-md-6 shadow p-5 mx-auto">
               <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder='Name' 
                        className='form-control my-2'
                        value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder='Email' 
                        className='form-control my-2'
                        value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="number" placeholder='Phone Number' 
                        className='form-control my-2'
                        value={number} onChange={e => setNumber(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="submit" value='Add Student' 
                        className='btn btn-block btn-dark' />
                </div>
               </form>
            </div>
        </div>
     </div>
  )
}

export default AddContact