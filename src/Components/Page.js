import React from 'react'
import { useState } from 'react'
import './Page.css'

function Page() {
    const [user ,setUser]= useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        message: ""
    });
    let name,value;
    const getUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setUser({...user, [name]: value})

    }
    const postData = async(e)=>{
        e.preventDefault();
        const {name,address,phone,email,message} = user;
        if(name&&address&&phone&&email&&message){

            const res= await fetch("https://reactform-24303-default-rtdb.firebaseio.com/reactform.json",{
                method:"POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify({
                    name,
                    address,
                    phone,
                    email,
                    message
                })      
               })
               if(res){
                setUser({
                    name: "",
                    address: "",
                    phone: "",
                    email: "",
                    message: ""
                });
                alert("Data Stored Successfully")
               }
        }
        else{
            alert("Please fill all the data")
        }
    }
  return (
   <>
   <div className="container">
    <h1>Contact Me</h1>
    <form method='POST'>
   <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Name</label>
  <input type="text" name="name" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" value={user.name} onChange={getUserData} required/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Address</label>
  <input type="text" name="address" className="form-control" id="formGroupExampleInput2" placeholder="Enter your address" value={user.address} onChange={getUserData}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Phone</label>
  <input type="text" name="phone" className="form-control" id="formGroupExampleInput2" placeholder="Enter your phone number" value={user.phone} onChange={getUserData}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Email</label>
  <input type="text" name="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email " value={user.email} onChange={getUserData}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Message</label>
  <input type="text" name="message" className="form-control" id="formGroupExampleInput2" placeholder="Enter your messsage " value={user.message} onChange={getUserData}/>
</div>
<button type="button" className="btn btn-success" onClick={postData}>Submit</button>
    </form>
   </div>
   <div className="map my-69">
    {/* embeded from google map */}
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5143.374101984442!2d85.42810098897887!3d27.67468405585548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQwJzI4LjYiTiA4NcKwMjUnNTUuOCJF!5e0!3m2!1sen!2snp!4v1686757603200!5m2!1sen!2snp" width="800" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
   </>
  )
}

export default Page

