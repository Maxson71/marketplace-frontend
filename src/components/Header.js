import React from 'react';
import logo from '../img/Logo.png'
import { BiSolidCategoryAlt, BiDownArrow } from "react-icons/bi";
import { FaHeart, FaUser } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import './headerStyle/header.sass'

const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className='logo'>
            <img src={logo} alt='All MArket logo' height={50}/>
        </div>
        <div className='category'>
            <BiSolidCategoryAlt size={30} />
            <h3>Категорії</h3>
        </div>
        <div className='find'>
            <div className='cities-finder'>
                <h3>Уся україна</h3>
                <BiDownArrow color='grey' size={15} />
            </div>
            <div className='manual-input'>
                <h3>Я хочу знайти...</h3>
                <CiSearch size={18}/>
            </div>
        </div>
        <div className='add-button'>
            <button>Додати оголошення</button>
        </div>
        <div className='active-icons'>
            <FaHeart size={25} className="icon"/>
            <TbMessages size={25} className="icon"/>  
            <IoNotifications size={25} className="icon"/>
            <FaUser size={25} className="icon"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
