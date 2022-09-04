import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[number, setNumber] = useState("");

    const {id} = useParams();

    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentContact = contacts.find(contact => 
        contact.id === parseInt(id));

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    } ,[currentContact]);

    const handleSubmit = e => {
        e.preventDefault();

        const checkEmail = contacts.find(
            (contact) => contact.id != parseInt(id)  && contact.email === email
            && email);
        const checkNumber = contacts.find(
            (contact) => contact.id != parseInt(id)  && contact.number === parseInt(number)
        );

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
            id: parseInt(id),
            name,
            email,
            number
        }
        dispatch({type: "UPDATE_CONTACT", payload: data});
        toast.success("Student updated Successfully !!")
        navigate("/");
    }

    return (
        <div className='container'>
            {currentContact? (
        <>
        <div className="row">
            <h1 className="display-3 text-center my-5">
                Edit Student {id}
            </h1>
            <div className="col-md-6 shadow p-5 mx-auto">
               <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder='Name' 
                        className='form-control my-2'
                        value={name} onChange={e => setName(e.target.value)}
                        />
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
                    <input type="submit" value='Update Student' 
                        className='btn btn-dark' />
                <Link 
                    to="/" 
                    className='btn btn-danger mx-3'>Cancel
                </Link>
                </div>
               </form>
            </div>
        </div>
        </>
        ) : (
            <h1 className='display-3 my-5 text-center'>
                Student Contact with id {id} not exists !!!
            </h1>
        )}
     </div>
  )
}

export default EditContact