import React, { useState } from "react";
import {FaBars} from "react-icons/fa"
import "./Header.css"
import NavItems from "./NavItems";
import Button from "../Button";


function Header(){
    const [showBar, setNavMenu]=useState(false)
    
    return(
        <div className="nav-section">
            <div className="logo-content">
                <span className="logo">Let's <span className="col-word">Smile</span> India</span>
            </div>
            
            <div className={showBar ?"responsive-sec" :"nav-items "}>
            <ul className="nav-list">
                {NavItems.map((item) => {
                    return <li key={item.key}><a className={item.cName} href={item.url}>{item.title}</a></li>
                })}
                </ul>
            </div>
            <div className="header-btn">
                <Button />
            </div>
            <div className="toggel">
            <a href="#" onClick={()=>setNavMenu(!showBar)}><FaBars className="toggel-bar"/> </a>
            
            </div>
            
        </div>
    )
}

export default Header