import React from 'react'
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'


import Header from './Header'
import Post from './Post'
import Slider from './Slider'




export default function HomeHOC() { 


 



  return (<>

    <Slider />
    <Header />
 
   

    < Post />
    <Outlet />

  </>)

}
