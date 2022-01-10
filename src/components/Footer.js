import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__top'>
                <p>Back to top</p>
            </div>

            <div className='footer__bottom'>
                <div className='footer__bottomContainer'>
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>
                        <li>Amazon Devices</li>
                    </ul>
                </div>

                <div className='footer__bottomContainer'>
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li>Sell products on Amazon</li>
                        <li>Sell on Amazon Business</li>
                        <li>Sell apps on Amazon</li>
                        <li>Become an Affiliate</li>
                        <li >Advertise Your Products</li>
                        <li >Self-Publish with Us</li>
                        <li >Host an Amazon Hum</li>
                        <li >- See More Make Money with Us</li>
                    </ul>
                </div>

                <div className='footer__bottomContainer'>
                    <h3>Amazon Payment Products</h3>
                    <ul>
                        <li>Amazon Business Card</li>
                        <li >Shop with Points</li>
                        <li >Reload Your Balance</li>
                        <li >Amazon Currency Converter</li>
                        <li >Coins Pay</li>
                    </ul>
                </div>

                <div className='footer__bottomContainer'>
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li >Amazon and COVID-19</li>
                        <li >Your Account</li>
                        <li >Your Orders</li>
                        <li >Shipping Rates & Policies</li>
                        <li >Returns & Replacements</li>
                        <li >Manage Your Content and Devices</li>
                        <li >Amazon Assistant</li>
                        <li >Help</li>
                    </ul>
                </div>
            </div>
            <div className='footer__copyright'>
                <span>Condintion of Use</span>
                <span>Privacy Policy</span>
                <span>Interest Based Ads</span>
                <span>© 1996-2021, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}

export default Footer
