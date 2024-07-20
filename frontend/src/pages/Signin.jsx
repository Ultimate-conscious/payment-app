import { BottomWarning } from "../component/BottomWarning";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { InputBox } from "../component/InputBox";
import { SubHeading } from "../component/SubHeading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function onClickHandler(){
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
        });
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")

    }
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"}/>
                    <SubHeading label={"Enter you credentials to access you account"}/>
                    <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} onchange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                    <InputBox label={"Password"} placeholder={"*******"} onchange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <div className="pt-4">
                        <Button label={"Signin"} onClick={onClickHandler}/>
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/Signup"}/>
                </div>
            </div>
        </div>
        
    )
}