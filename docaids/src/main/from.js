import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function Formm() {
  const [userData, setUserData] = useState({
    email:"",
    password:""
  });
  let name,value;
  const postUserData =(event) => {
    name = event.target.name;
    value = event.target.value;
setUserData({...userData, [name]:value})
  };

  const submitData = async (event) => {
    event.preventDefault();
    const{email ,
    password} = userData;
    const res = fetch("https://docaidcom-default-rtdb.firebaseio.com/userDataRecords.json",
    {
    method: "POST",
    Headers: { 
      "Content-Type" :"application/json",
    },
    body:JSON.stringify({
      email:"",
    password:""
    }),
  }
    );
    if(res){
      alert("Data Stored");
    }
      else{
      alert("plz fill the data");}
  };
  return (
    <Form method="POST">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
        name="email"
         placeholder="Enter email" 
        value={userData.email}
        onChange={postUserData}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={postUserData} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitData} >
        Submit
      </Button>
    </Form>
  );
}
export default Formm;