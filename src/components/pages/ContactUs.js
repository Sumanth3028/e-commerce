import React ,{useRef}from "react";
import { Button, Card, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const ContactUs = (props) => {
     const nameInputRef=useRef('')
     const emailInputRef=useRef('')
     const pwdInputRef=useRef('')
    const submitHandler=(event)=>{
        event.preventDefault()
        const obj={
            name:nameInputRef.current.value,
            email:emailInputRef.current.value,
            pwd:pwdInputRef.current.value
        }
        console.log(obj)
        fetch("https://ecommerce-416a9-default-rtdb.firebaseio.com//users.json",{
           method:'POST',
           body:JSON.stringify(obj),
           headers:{
             'Content-Type':'application/json'
           }
         }).then(alert("Thanks for contacting us, we'll reach you shortly."));
         nameInputRef.current.value=''
         emailInputRef.current.value=''
         pwdInputRef.current.value=''
       
    }
  return (
    <Card style={{ margin:'1rem auto',width:'50rem',height:'50rem',alignItems:'inherit',background:'skyBlue',borderRadius:'20px'}}>
        <header style={{textAlign:'center',fontSize:'5rem',fontStyle:'italic',background:'black',color:"white",borderRadius:'20px'}}>User Page</header>
      <Form style={{alignItems:'center',marginTop:'10rem'}} onSubmit={submitHandler}>
      <FormGroup  controlId="formBasicUserName">
          <FormLabel style={{fontSize:'3rem',textAlign:'left',marginLeft:'3rem'}}>Username</FormLabel>
          <FormControl type="text" placeholder="enter username" style={{width:'80%',marginLeft:'3rem',padding:'1rem'}} ref={nameInputRef} required></FormControl>
        </FormGroup>
        <FormGroup  controlId="formBasicEmail">
          <FormLabel style={{fontSize:'3rem',textAlign:'left',marginLeft:'3rem'}}>Email Id</FormLabel>
          <FormControl type="email" placeholder="enter email" style={{width:'80%',marginLeft:'3rem',padding:'1rem'}} ref={emailInputRef} required></FormControl>
        </FormGroup>
        <FormGroup  controlId="formBasicPassword">
          <FormLabel style={{fontSize:'3rem',textAlign:'left',marginLeft:'3rem'}}>Password</FormLabel>
          <FormControl type="password" placeholder="password" style={{width:'80%',marginLeft:'3rem',padding:'1rem'}} ref={pwdInputRef} required></FormControl>
        </FormGroup>
       <Button variant="primary" type="submit" style={{marginTop:'2rem',marginLeft:'13rem',width:"40%",padding:'1rem'}}>Submit</Button>
      </Form>
    </Card>
  );
};

export default ContactUs;
