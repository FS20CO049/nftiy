import React from 'react'
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import { MdToken } from 'react-icons/md'
import { PiSquareSplitHorizontal } from 'react-icons/pi'
import { CgShapeHexagon } from 'react-icons/cg'
import {BiMenu} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'

import './sidebar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="menu-icon" onClick={toggleSidebar}>
            <div className={`bar ${isOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isOpen ? 'active' : ''}`}></div>
              
            </div>
            <div className="logo">
                <h1> <CgShapeHexagon />NFTify</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/'>
                            <MdToken fill='red' /> Token Address
                        </Link>
                    </li>

                    <li>
                        <Link to='/pairlist'>
                            <PiSquareSplitHorizontal fill='red' /> Pair Address
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="icons">
                <BiLogoFacebookSquare fill='red' />
                <BiLogoLinkedinSquare fill='red' />
                <FaTwitterSquare fill='red' />

            </div>

        </div >
    )
}

export default Sidebar
