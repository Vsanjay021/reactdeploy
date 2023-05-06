import React, { useState } from 'react'
// import Navbar from '../components/navbar/navbar'
import { NavLink } from 'react-router-dom';
import './home.css'
import PostNotice from '../components/postNoticeComponents/postNotice';
import ViewNotice from '../components/viewNoticeComponents/viewNoticeComponent';



const Home = () => {
  const[value,setValue]=useState("Post Notice");
  const[flag,setFlag]=useState(true)
  let links=[
    {id:1,title:"Post Notice"},
    {id:2,title:"View Notice"}
]

// let styleFn=({isActive})=>{
//     return isActive
//     ?{textDecoration:"none",color:"black",backgroundColor:"rgb(170, 168, 232)"}
//     :{textDecoration:"none",color:"black",backgroundColor:"white"}
// }

  const handleClick=(str)=>{
    if(str==="Post Notice"){
      setValue(str);
      setFlag(true)
    }else if(str==="View Notice"){
      setValue(str);
      setFlag(false)
    }
  }
  return (
    // <Navbar/>
    <>
    <div className='navbar' >
        {
            links.map((item)=>{
                return <NavLink  onClick={()=>handleClick(item.title)}  key={item.id}   className='navlink' >{item.title}</NavLink>
            })
        }
    </div>
    {flag===true && value==="Post Notice" ? <PostNotice /> : <ViewNotice/>}
    </>

  )
}

export default Home