import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Signup } from "./component/Signup";
import { Signin } from "./component/Signin";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          {/* <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/send" element={<SendMoney/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
