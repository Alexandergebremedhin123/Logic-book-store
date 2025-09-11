import React,{useState} from 'react'
import './signup.css'
import {useNavigate} from 'react-router-dom'

const apiUrl=process.env.REACT_APP_API_URL;

export default function Signup() {
    
  const[formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    confirmpassword:''
  })
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.id]:e.target.value
    });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {name,email,password,confirmpassword}=formData;
     if(password!==confirmpassword){
       alert('Passwords do not match');
       return;
     }
    try{
    const response=await fetch(`${apiUrl}/api/auth/signup`,{ 
    method:'POST',
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify({name,email,password}),
   });
   console.log("apiUrl: ",apiUrl)
   console.log(response)
   if(response.ok){
     alert('Account created successfully');
     navigate('/login')
   }
   else{
     const data=await response.json();
     alert(data.message);
   }
  }catch(error){
    console.log('Error: ',error);
    alert('Error creating account')
  }
  }
  return (
    <form className="reg-form-container" onSubmit={handleSubmit}>
        <h2 className="reg-form-heading">Join Us Today</h2>
        <div>
          <label htmlFor="name" className="reg-form-label">Full Name</label>
          <input 
            type="text" 
            id="name" 
            className="reg-form-input"
            value={formData.name} onChange={handleChange} required
          />
        </div>
        <div>
          <label htmlFor="email" className="reg-form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            className="reg-form-input"
            value={formData.email} onChange={handleChange} required
          />
        </div>
        <div>
          <label htmlFor="password" className="reg-form-label">Password</label>
          <input 
            type="password" 
            id="password" 
            className="reg-form-input"
            value={formData.password} onChange={handleChange} required
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="reg-form-label">Confirm Password</label>
          <input 
            type="password" 
            id="confirmpassword" 
            className="reg-form-input"
            value={formData.confirmpassword} onChange={handleChange} required
          />
        </div>
        <button type="submit" className="reg-submit-btn">
          Create Account
        </button>
        <p className="reg-form-footer">
        Already have an account? <a href='/login'>Sign in</a>

        </p>
      </form>
  )
}
