import React from 'react'
import Logo from "../../assets/images/download.jpeg"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
function Header() {
  return (
    <>
    <div className='headerWrapper'>
     <div className='top-strip bg-blue'>
        <div className='container'>
            <p className='text-center mb-0 mt-0'>Wellcome to <b> touseef imran </b> first ecommerce fullstack project </p>
        </div>
     </div>
    
    <div className='header'>
        <div className="container">
            <div className='row'>
                <div className='logoWrapper d-flex align-items-center col-sm-2'>
                <Link to="/"> <img src={Logo} alt='Logo'/> </Link>
                </div> 
                <div className='d-flex align-items-center col-sm-10 part2' >
            
                </div> 
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Header;
