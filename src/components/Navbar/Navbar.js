import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li> <Link className='navlink' to={"/"}><img className='imglogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link></li>
                <li> <Link className='navlink' to={"/popular"}>Popular</Link></li>
                <li> <Link className='navlink' to={"/toprated"}>top_rated</Link></li>
                <li> <Link className='navlink' to={"/upcoming"}>upcoming</Link></li>
            </ul>
        </div>
    )
}
