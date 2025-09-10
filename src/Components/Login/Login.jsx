import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [visited,setvisited] = useState(true);
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const navigate = useNavigate();
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    console.log(data);
    if(data.error==="Invalid email or password"){
      toast.error(data.error,{
        position: 'top-center',
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
    else{
      navigate("/");
    }
  };
  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    console.log(data);
    if(data.error==="Invalid email or password"){
      toast.error(data.error,{
        position: 'top-center',
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
    else{
      navigate(`/${data.user}`);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between h-[80px] shadow-sm">
        <img
          className="w-[250px]"
          src="https://i.ibb.co.com/21wfxvqB/Logo-maker-project-removebg-preview1.png"
          alt="Jkkniu-Mart"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-[calc(100vh_-_80px)] gap-5">
        <h2 className="text-3xl text-[#2fa95b] font-bold">Login</h2>
        <div className="flex gap-5">
          <button className={`btn w-30 ${visited ? "bg-[#2fa95b] text-white border-0" : "bg-white text-[#2fa95b] border-[#2fa95b] hover:bg-[#2fa95b] hover:text-white"}`} onClick={() => setvisited(true)}>Student</button>
          <button className={`btn w-30 ${!visited ? "bg-[#2fa95b] text-white border-0" : "bg-white text-[#2fa95b] border-[#2fa95b] hover:bg-[#2fa95b] hover:text-white"}`} onClick={() => setvisited(false)}>Admin</button>
        </div>
        <form className={`flex flex-col gap-5 ${visited ? "" : "hidden"}`} onSubmit={(e) => handleUserSubmit(e)}>
          <input className="text-black border-2 border-[#2fa95b] w-[250px] h-10 pl-2 rounded-xl focus:outline-none focus:border-yellow-600" type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} required />
          <input className="text-black border-2 border-[#2fa95b] w-[250px] h-10 pl-2 rounded-xl focus:outline-none focus:border-yellow-600" type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} required />
          <input
            type="submit"
            value="Login"
            className="bg-[#2fa95b] text-white py-2 rounded font-bold cursor-pointer"
          />
        </form>
        <form className={`flex flex-col gap-5 ${visited ? "hidden" : ""}`} onSubmit={(e) => handleAdminSubmit(e)}>
          <input className="text-black border-2 border-[#2fa95b] w-[250px] h-10 pl-2 rounded-xl focus:outline-none focus:border-yellow-600" type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} required />
          <input className="text-black border-2 border-[#2fa95b] w-[250px] h-10 pl-2 rounded-xl focus:outline-none focus:border-yellow-600" type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} required />
          <input
            type="submit"
            value="Login"
            className="bg-[#2fa95b] text-white py-2 rounded font-bold cursor-pointer"
          />
        </form>
      </div>
      <ToastContainer autoClose={1000}/>
    </div>
  );
};

export default Login;
