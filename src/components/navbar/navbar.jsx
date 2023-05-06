import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    let links=[
        {id:1,title:"Post Notice",path:"/"},
        {id:1,title:"View Notice",path:"/viewnotice"}
    ]
    console.log(links)
    let styleFn=({isActive})=>{
        return isActive
        ?{textDecoration:"none",color:"black",backgroundColor:"rgb(170, 168, 232)"}
        :{textDecoration:"none",color:"black",backgroundColor:"white"}
    }
  return (
    <>
    <div className='navbar' >
        {
            links.map((item)=>{
                return <NavLink key={item.id}  style={styleFn} to={item.path} className='navlink' >{item.title}</NavLink>
            })
        }
    </div>
    </>
  )
}

export default Navbar