import { useEffect, useState } from "react"
import { Appbar } from "../component/Appbar"
import { Balance } from "../component/Balance"
import {Users} from "../component/Users"
import axios from "axios"

export const Dashboard = () => {
    const [balance,setBalance] = useState(0);

    useEffect(()=>{
        async function getBalance(){
            const res = await axios.get({
                url: "http://localhost:3000/api/v1/account/balance",
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            setBalance(res.data.balance);
        }
        getBalance()

    })

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}