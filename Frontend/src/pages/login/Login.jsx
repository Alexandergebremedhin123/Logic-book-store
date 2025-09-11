import React,{useState} from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom'

const apiUrl=process.env.REACT_APP_API_URL;

export default function Login() {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    email:'',
    password:''
})
const handleChange=(e)=>{
  setFormData({
      ...formData,
      [e.target.id]:e.target.value
  });
};
const handleSubmit=async(e)=>{
  e.preventDefault();
  const {email,password}=formData;
  
  try{
  const response=await fetch(apiUrl+ '/api/auth/login',{
   method:'POST',
   headers:{
     'Content-Type':'application/json'
   },
   body:JSON.stringify({email,password})
   
 });
 if(response.ok){
  const data = await response.json(); 
  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('user', JSON.stringify(data.user));
   alert('Login successful');
   navigate('/kindleLibrary')
 }
 else{
   const data=await response.json();
   alert(data.message);
 }
}catch(error){
  console.error('Error: ',error);
  alert('Error logging in')
}
}
  return (
    <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="form-heading">Welcome Back</h2>
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="text" 
            id="email" 
            value={formData.email}
            className="form-input"
            onChange={handleChange} required
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            id="password" 
            className="form-input"
            value={formData.password} onChange={handleChange} required
          />
        </div>
        <div className="checkbox-container">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="form-checkbox" />
            <label htmlFor="remember-me" className="checkbox-label">Remember me</label>
          </div>
          <a href="#" className="form-link">Forgot password?</a>
        </div>
        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
  )
}
