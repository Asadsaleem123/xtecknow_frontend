import React, { useEffect, useState } from "react";
import loginImg from "../assets/login.jpg";
import Signup from "./signup";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate=useNavigate();

    const url = "https://1ae8-2a02-ce0-2800-69c5-64b3-e104-582-10a9.in.ngrok.io/api/login";
    const [data, setdata] = useState({
        email: "",
        password: ""
    });
    function submit(e) {
        e.preventDefault()
        axios.post(url, {
            email: data.email,
            password: data.password


        }).then(response => {
            console.log(response.data)
            alert("success")
            localStorage.setItem("token:",response.data.token)
            navigate("/")
        }).catch((error)=>{
            alert("error",error.response)
        })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setdata(newdata)
        console.log(newdata)
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={loginImg} alt="no iimage" />
            </div>
            <div className="bg-gray-100 flex flex-col justify-center">
                <form onSubmit={(e) => submit(e)} className="max-w-[400px] w-full mx-auto bg-white p-4 ">
                    <h2 className="text-4xl font-bold text-center py-6">XTEC</h2>
                    <div className="flex flex-col py-2" >
                        <label >Email</label>
                        <input className="border p-2" type="email" name="email" id="email"onChange={(e)=>handle(e)} />
                    </div>
                    <div className="flex flex-col py-2">
                        <label >Password</label>
                        <input onChange={(e)=>handle(e)}id="password" className="border p-2" type="password" name="password"
                        />
                    </div>
                    <button id="btn" className="border w-full my-5 py-2 bg-indigo-600" type="submit">Sign In</button>
                    <div className="flex justify-between">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember Me</p>
                        <Link className="text-blue-600" to="/signup">Create An Account</Link>
                    </div>
                </form>
            </div>

        </div>

    );
}
export default Login;