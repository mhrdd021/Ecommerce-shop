import React from 'react'

//Style
import css from './Header.module.css' 

//Logo
import Logo from '../../assets/logo.png'

//Icons
import {CgShoppingBag} from 'react-icons/cg'
import {FiMenu} from 'react-icons/fi'
import { useState } from 'react'

const Header = () => {

const [shoMenu , setShowMenu] = useState(true)

const toggleMenu = () => {
    setShowMenu((shoMenu)=>!shoMenu)
}

  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt=""/>
            <span>MHRDD</span>
        </div>

        <div className={css.right}>

        <div className={css.bars} onClick={toggleMenu}>
            <FiMenu/>
        </div>

        <ul className={css.menu} style={{display: shoMenu? 'inherit': "none"}}>
            <li>collection</li>
            <li>brands</li>
            <li>new</li>
            <li>sales</li>
            <li>ENG</li>
        </ul>


            <input type="text" className={css.search} placeholder="search"/>

            <CgShoppingBag className={css.cart}/>
        </div>
    </div>
  )
}

export default Header