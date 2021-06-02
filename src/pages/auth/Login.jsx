import { Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CustomButton, TextInput } from '../../components';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <TextInput {...register('firstName')} /> register an input */}
            <TextInput
              {...register('username', { required: true })}
              className="mt-3"
              placeholder="email"
              type="email"
            />
            {errors.lastName && <p>Last name is required.</p>}
            <TextInput
              {...register('password', { required: true, pattern: /\d+/ })}
              className="mt-2"
              placeholder="password"
              type="password"
            />
            {errors.age && <p>Please enter number for age.</p>}
            <CustomButton
              label="Login"
              type="submit"
              colorScheme="green"
              className="w-100 mt-4"
              onClick={() => handleSubmit(onSubmit)}
            />
          </form>
          <div>
            <p className="mt-2">OR</p>
            <CustomButton
              label="Login with Google"
              type="submit"
              colorScheme="red"
              className="w-100 mt-2"
            />
            <CustomButton
              label="Login with Facebook"
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
