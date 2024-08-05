import React from 'react'
import Logo from "../../assets/images/download.jpeg"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import CountryDropdown from '../CountryDropodown';
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';


function Header() {
  return (
    <>
    <div className='headerWrapper'>
     <div className='top-strip bg-blue'>
        <div className='container'>
            <p className='text-center mb-0 mt-0'>Wellcome to <b> touseef imran </b> first ecommerce fullstack project </p>
        </div>
     </div>
    
    <header className='header'>
        <div className="container">
            <div className='row'>
                <div className='logoWrapper d-flex align-items-center col-sm-2'>
                <Link to="/"> <img src={Logo} alt='Logo'/> </Link>
                </div> 
                <div className='d-flex align-items-center col-sm-10 part2' >
               <CountryDropdown/>
               {/* Header search start here */}
              <SearchBox/>
               {/* Header search end here */}


               <div className='d-flex align-items-center part3 ml-auto'>
                <Button className='circle mr-3'> <FiUser /> </Button>
                <div className='ml-auto cartTab d-flex align-items-center'>
                  <span className='price'>$3.39</span>
                  <div className='position-relative ml-2'>
                  <Button className='circle '> <IoBagOutline /> </Button>
                  <span className='count d-flex align-items-center justify-content-center'>
                    1
                  </span>
                  </div>
                </div>
                
               </div>
                </div> 
            </div>
        </div>
    </header>

    {/* navigation start */}
    <Navigation/>
    {/* navigation end */}
    </div>
    </>
  )
}

export default Header;
