import {Heading} from "../component/Heading"
import {SubHeading} from "../component/SubHeading"
import {InputBox} from "../component/InputBox"
import {Button} from "../component/Button"
import {BottomWarning} from "../component/BottomWarning"
import { useState } from "react"
import axios from 'axios'


export function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    async function onClickHandler(){
        const res = await axios.post("http://localhost:3000/api/v1/user/signup",{
            username,
            firstName,
            lastName,
            password

        });
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
    }

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your infromation to create an account"} />
                <InputBox placeholder="John" label={"First Name"} onchange={(e)=>{
                    setFirstName(e.target.value);
                }}/>
                <InputBox placeholder="Doe" label={"Last Name"} onchange={(e)=>{
                    setLastName(e.target.value);
                }}/>
                <InputBox placeholder="johndoe@gmail.com" label={"Email"} onchange={(e)=>{
                    setUsername(e.target.value);
                }} />
                <InputBox placeholder="*******" label={"Password"} onchange={(e)=>{
                    setPassword(e.target.value);
                }}/>
                <div className="pt-4">
                <Button label={"Sign up"} onClick={onClickHandler}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
            </div>
        </div>
        
    )
}










