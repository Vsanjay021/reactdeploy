import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

const PostNotice = () => {
  let [name,setName]=useState("");
  let [title,setTitle]=useState("");
  let [desc,setDesc]=useState("");

  const post=async (str)=>{
    console.log(str)
    const response=await fetch("https://mock11-hs2s.onrender.com/create",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(str)
    });
    console.log(response)
    let data=await response.json();
    alert(data.msg);
  }
   function handleSubmit(event) {
    event.preventDefault();
    // alert("hi");
    console.log(name,title,desc);
    let str={
      author:name,
      title,
      description:desc
    }
    post(str);
  }
  return (
    <>
    {/* <NavLink/> */}
    
    <div>
      <h1>Post notice</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text"  placeholder='Enter author name' onChange={(e)=>{setName(e.target.value)}} required/>
        <input type="text" placeholder='Enter notice title' onChange={(e)=>{setTitle(e.target.value)}} required/>
        <input type="text" placeholder='Enter notice description' onChange={(e)=>{setDesc(e.target.value)}} required/>
        <input type="submit"  value='Submit'/>
      </form>
    </div>
    </>
  )
}

export default PostNotice