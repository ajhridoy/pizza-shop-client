import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../action/userAction';
import { loginUserReducer } from '../../reducer/userReducer';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  function login() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }
    return (
        <div>
            <div className='row justify-content-center'>
        <div className='col-md-5 mt-2 text-start shadow-lg p-3 mb-5 bg-body rounded'>
          <h2 className='text-center' style={{ fontSize: '35px' }}>
            Login
          </h2>
          {loading && <Loading></Loading>}
          {error && <Error error='Invalid Credentials'></Error>}
          <div>
            <input
              type='text'
              placeholder='email'
              className='form-control'
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type='text'
              placeholder='password'
              className='form-control'
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className='btn mt-3 mb-3' onClick={login}>
              LOGIN
            </button>
            <Link className='nav-link' to='/register'>
              Click Here To Register
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;