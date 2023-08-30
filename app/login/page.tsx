"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext"


const Login = () => {

    const router = useRouter();

    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    });

    const {login} = useContext(AuthContext);

    const handleChange = (event: any) => {
        setInputs(prev => ({ ...prev, [event.target.name]: event.target.value }));        
    }
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                username: inputs.username,
                password: inputs.password,
            })
        })        

        if (response.ok) {
            router.push("/");                       
        } else {
            router.push("/login");            
        }
    }

    return (
        <section >
            <div className="flex flex-col items-center justify-center pt-20 pb-5">
                <Image
                    src="/nextjs-login-logo.png"
                    width={200}
                    height={200}
                    alt="login-logo"
                    className=" rounded-full"
                />
                <h1 className=" text-xl text-gray-900 font-semibold font-satoshi pt-10">Login</h1>
            </div>
            

            <div className="flex flex-col items-center justify-center pt-5">
                <div className="flex flex-col gap-5 w-100">
                    <input className=" border-b-2" name="username" type="text" placeholder="Username" onChange={handleChange}/>
                    <input className=" border-b-2" name="password" type="password" placeholder="Password" onChange={handleChange}/>

                    <button className="btn" onClick={handleSubmit}>Login</button>
                </div>
            </div>   
        </section>            
    )
}

export default Login