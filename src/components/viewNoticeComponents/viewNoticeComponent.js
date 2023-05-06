import React, { useState } from 'react'
// import Card from '../card';
import "./viewNoticeComponent.css"
// import Navbar from '../navbar/navbar'

const ViewNotice = () => {

  let [data,setData]=useState([]);
  async function getNotification(){
    let response=await fetch("https://mock11-hs2s.onrender.com/get");
    let data=await response.json();
    setData(data)
  }
  getNotification();

  async function deleteCard(id){
    let response=await fetch(`https://mock11-hs2s.onrender.com/delete/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    });
    console.log(response);
    let data=await response.json();
    alert(data.msg);
  }

  return (
    <>
    {/* <Navbar/> */}
    <div>
      <h1>View notice</h1>
      <div className='cards'>
        {
          data?.map((item, index) => {
            return (
                <div >
                    <h3>Author: {item.author}</h3>
                    <h3>Title:{item.title}</h3>
                    <p>Description:{item.description}</p>
                    <div>
                  <button >Edit</button>
                  <button onClick={()=>{deleteCard(item._id)}}>Delete</button>
                  </div>
                </div>
            );
        })
        }
      </div>
    </div>
    
    </>
  )
}

export default ViewNotice