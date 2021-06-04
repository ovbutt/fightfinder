import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CustomButton, TextInput } from '../../components';
import { useFirebase } from 'react-redux-firebase';
import { regex } from '../../utils/const';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const firebase = useFirebase();

  const onSubmit = () => {
    if (!email) {
      alert('Email cannot be empty');
      return;
    }
    if (!regex.email.test(String(email).toLowerCase())) {
      alert('Please enter valid email');
      return;
    }
    if (!password) {
      alert('Password cannot be empty');
      return;
    }

    const credentials = {
      email,
      password,
    };

    firebase
      .login(credentials)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const googleLogin = () => {
    firebase
      .login({ provider: 'google', type: 'popup' })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const facebookLogin = () => {
    firebase
      .login({ provider: 'facebook', type: 'popup' })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="justify-content-center align-items-center d-flex h-100"
      style={{ backgroundColor: '#e3e3e3', height: '100%' }}
    >
      <div className="card col-3 text-center p-4">
        <div className="container">
          <Typography variant="h4" className="my-2">
            Fight Finder
          </Typography>
          <Typography variant="h6" className="my-2">
            LogIn
          </Typography>
          <TextInput
            className="mt-3"
            placeholder="email"
            type="email"
            isRequired={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            className="mt-2"
            placeholder="password"
            type="password"
            isRequired={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButton
            label="LogIn"
            colorScheme="green"
            className="w-100 mt-4"
            onClick={() => onSubmit()}
          />

          <div>
            <p className="mt-2">OR</p>
            <CustomButton
              label="SignIn with Google"
              type="submit"
              colorScheme="red"
              className="w-100 mt-2"
              onClick={() => onSubmit()}
            />
            <CustomButton
              label="SignIn with Facebook"
              type="submit"
              colorScheme="blue"
              className="w-100 mt-2"
            />
            <br></br>
            <br></br>
            <Link to="/signup">Don't have an account? Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
