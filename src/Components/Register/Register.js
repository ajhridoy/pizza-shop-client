import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../action/userAction";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("")

  const dispatch = useDispatch()
  function register(){
    if(password !== cPassword){
        alert("Password does not match to confirm password")
    }
    else{
        const user = {
            name,
            email,
            password
        }
        console.log(user)
        dispatch(registerUser(user))
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="form-control"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              required
            />
            <input
             type="text"
             placeholder="Email" 
             className="form-control" 
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
             required
             />
            <input
              type="text"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="form-control"
              value={cPassword}
              onChange={(e)=>{setCpassword(e.target.value)}}
              required
            />
            <button className="btn mt-3" onClick={register}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
