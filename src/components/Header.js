import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';


function Header() {
    return (
        <div className='header'>
            <img
                className='header__logo'
                src='https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png'
                alt='amazon-logo'
            />
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
                <div className='header__optionBasket'>
                    <ShoppingCartOutlinedIcon
                        className='header__cart'
                    />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
