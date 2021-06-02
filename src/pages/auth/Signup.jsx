import { Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CustomButton, TextInput } from '../../components';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    window.location.replace('/home');
  };

  return (
    <div
      className="justify-content-center align-items-center d-flex "
      style={{ backgroundColor: '#e3e3e3' }}
    >
      <div className="card col-4 align-self-center d-flex text-center p-4">
        <div className="container">
          <Typography variant="h4" className="my-2">
            Fight Finder
          </Typography>
          <Typography variant="h6" className="my-2">
            Create Account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              {...register('username', { required: true })}
              className="mt-3"
              placeholder="email"
              type="email"
            />
            {errors.lastName && <p>Last name is required.</p>}
            <TextInput
              {...register('username', { required: true })}
              className="mt-3"
              placeholder="email"
              type="email"
            />
            {errors.lastName && <p>Last name is required.</p>}
            <TextInput
              {...register('username', { required: true })}
              className="mt-3"
              placeholder="email"
              type="email"
            />
            {errors.lastName && <p>Last name is required.</p>}
            <TextInput
              {...register('username', { required: true })}
              className="mt-3"
              placeholder="email"
              type="email"
            />
            {errors.lastName && <p>Last name is required.</p>}
            <TextInput
              {...register('username', { required: true })}
              className="mt-3"
              placeholder="email"
              type="email"
            />
            {errors.lastName && <p>Last name is required.</p>}
            <TextInput
              {...register('username', { required: true })}
              className="mt-3"
              placeholder="email"
              type="email"
            />
            {errors.lastName && <p>Last name is required.</p>}
            <TextInput
              {...register('username', { required: true })}
              className="mt-3"
              placeholder="email"
              type="email"
            />
            {errors.lastName && <p>Last name is required.</p>}
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
              label="Create Account"
              type="submit"
              colorScheme="green"
              className="w-100 mt-4"
              onClick={() => handleSubmit(onSubmit())}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
