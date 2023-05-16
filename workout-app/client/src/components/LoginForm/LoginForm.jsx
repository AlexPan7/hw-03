import { useState } from 'react'
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const {form, formItem, formField, formSubmit} = styles;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await (
      await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: "test@test1.com",
          password: "1111"
        })
      })
    ).json();

    if(result) {
      console.log(result);
    }
  }


  return (
    <>
      <form className={form} onSubmit={handleSubmit}>
        <div className={formItem}>
          <input className={formField} type="text" name="name" placeholder="Name..."  />
        </div>
        <div className={formItem}>
          <input className={formField} type="email" name="email" placeholder="Email..." />
        </div>
        <button className={formSubmit} type='submit'>Send</button>
      </form>
    </>
  );
};

export default LoginForm