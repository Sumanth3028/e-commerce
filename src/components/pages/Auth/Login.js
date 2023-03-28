import React from "react";
import classes from './Login.module.css'
import { useRef ,useContext} from "react";
import CartContext from "../../../store/cart-context";
import { Navigate,useNavigate } from "react-router-dom";
const Login=(props)=>{

    const ctx=useContext(CartContext)
    const emailInputRef=useRef();
    const pwdInputRef=useRef()
    const navigate=useNavigate()

    const submitHandler=(event)=>{
        event.preventDefault()

        const emailValue=emailInputRef.current.value
        const pwdValue=pwdInputRef.current.value

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJDKJsw6vGx5JASyTEwuicIUqs-FV-7_o',{
            method:"POST",
            body:JSON.stringify({
                email:emailValue,
                password:pwdValue,
                returnSecureToken:true
            }),
            headers:{
                "content-Type":"application/json"
            }
        }).then((res) => {
          
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          ctx.login(data.idToken);
          // ctx.login(data.email)
          console.log(data.email)
           //localStorage.setItem("email" ,JSON.stringify(data.email))
          navigate('/store')
          
        })
        .catch((err) => {
          alert(err.message);
        });
        


    }

  return(
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler} >
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email"  id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password"  id="password" ref={pwdInputRef} required />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        
        </div>
      </form>
    </section>
  )
}

export default Login