"use client";

import { Box, Button } from "@mui/material";
import { useState } from "react";
import  axios  from "axios";


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState('');
  
  
  

  const handleSubmit =async (e) => {
    
    if(email===''||password===''){

setError('Both fields are requried');
return;
}
    e.preventDefault();
    const response = await axios.post('/api/login',{email,password,})

    console.log(response);

    

    
  }
    

  

  return (
    <Box className="flex justify-center items-center min-h-screen bg-gray-100">
      <Box className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md outline outline-2 outline-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {error&&<div className="mb-4 text-red-500 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className=" grid ">
          
          

          {/* Email input field */}
          <Box className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Box>

          {/* Password input field */}
          <Box className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Box>

          

          {/* Submit button */}
          <Button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600  focus:ring-2 focus:ring-gray-500"
          >
            Login
          </Button>
        
        </form>
      </Box>
    </Box>
  );
};

export default Login;