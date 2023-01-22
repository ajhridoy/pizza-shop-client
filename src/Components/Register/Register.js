import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../action/userAction";
import { userRegisterReducer } from "../../reducer/userReducer";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Success from "../Success/Success";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("")
  const registerState = useSelector(state => state.userRegisterReducer)
  const {error, loading, success} = registerState

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
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-body rounded">
          {loading && (<Loading></Loading>)}
          {success && (<Success success='User Register Successful'></Success>)}
          {error && (<Error error='This email already registered'></Error>)}
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
            <button className="btn mt-3 mb-3" onClick={register}>Register</button>
            <Link className='nav-link' to='/login'>Click Here To Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
