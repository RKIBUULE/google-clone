import React from 'react';
import './Home.css' 
import { Link } from "react-router-dom"
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__header'>
              <div className='home__headerLeft'>
                <Link to ="/about">About</Link>
                <Link to ="/store">Store</Link>
              </div>  
              <div className='home__headerRight'>
                <Link to ="/gmail">Gmail</Link> 
                <Link to ="/images">Images</Link> 
                <AppsIcon />
                <AccountCircleIcon />
              </div>  
            </div>
            <div className='home__body'>
                <img src="https://lh3.googleusercontent.com/NGPrjka2ai0w7sfhxkxCwtOSh2wVyEZMdtrVxI4vrA22ebA_fcyl9PSvhTaCYXSWh0A68ZhvXhVZ4U-Nnp3v9IfoXg5o5H1tjjK97cs" 
                alt="" />
                <div className='home__inputcontainer'>
                    <Search  />
                </div>
            </div>
        </div>
    );
}

export default Home;
