import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { Link } from 'react-router-dom'
import {useStateValue} from '../StateProvider.js'


function Header() {
    //accessing the State Provider
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className='header'>
            <Link to='/'>
                <img
                className='header__logo'
                src='https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png'
                alt='amazon-logo'
                />
            </Link>
    
            <div className='header__deliver'>
                <LocationOnOutlinedIcon />
                <div className='header__option'>
                    <span className='header__optionLineOne'>Deliver to</span>
                    <span className='header__optionLineTwo'>Nigeria</span>
                </div>
            </div>
            <div className='header__search'>
                <div className='header__searchAll'>
                    <p>All</p>
                    <ArrowDropDownOutlinedIcon
                    className='header__searchAllIcon'
                />
                </div>
                <input
                    className='header__searchInput'
                    type='text'
                />
                <SearchIcon
                    className='header__searchIcon'
                />
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello, Sign in</span>
                    <span className='header__optionLineTwo'>Account & List</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingCartOutlinedIcon
                            className='header__cart'
                        />
                        <span className='header__optionLineTwo header__basketCount'>{ basket.length}</span>
                    </div>
                </Link>
        
            </div>
        </div>
    )
}

export default Header
