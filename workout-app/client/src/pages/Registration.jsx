import {useState, useContext} from 'react'
import axios from 'axios';

import { AuthContext } from "../context/auth"

const BASE_URL = "http://localhost:5000/registration";

export const Registration = () => {
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  
  const handleChange= (e) => {
    const { name, value} = e.target;
    setFormData((prevFormData)=> ({ ...prevFormData, [name]: value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(formData);
      const response = await axios.post(BASE_URL, formData);
      const result = response.data;
      result && login( result );
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder='email' value={FormData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder='password' value={FormData.password} onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder='confirm password' value={FormData.confirmPassword} onChange={handleChange} />
      <input type="text" name="firstName" placeholder='first Name' value={FormData.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder='last Name' value={FormData.lastName} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}