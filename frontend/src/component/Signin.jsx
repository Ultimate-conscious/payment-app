import { BottomWarning } from "./BottomWarning";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { SubHeading } from "./SubHeading";

export function Signin(){
    function onClickHandler(){

    }
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"}/>
                    <SubHeading label={"Enter you credentials to access you account"}/>
                    <InputBox label={"Email"} placeholder={"johndoe@gmail.com"}/>
                    <InputBox label={"Password"} placeholder={"*******"}/>
                    <div className="pt-4">
                        <Button label={"Signin"} onClick={onClickHandler}/>
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/Signup"}/>
                </div>
            </div>
        </div>
        
    )
}