import React from 'react'
import '../styles/Home.css'
import Slider from './Slider'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <Slider />
            <div className='home__row'>
                <Product
                    title='Deep Sleep (Devin Gray Book 1) Kindle Edition'
                    price={15.95}
                    image='https://m.media-amazon.com/images/I/41cSSjZRfwS.jpg'
                    rating={4}
                />
                <Product
                    title='DJI Mini 2 Fly More Combo-Ultralight Foldable'
                    price={599}
                    image='https://m.media-amazon.com/images/I/71wfsfmD-UL._AC_UL320_.jpg'
                    rating={5}
                />
            </div>

            <div className='home__row'>
                <Product
                    title='Sony Wireless Noise Canceling Overhead Headphones'
                    price={348}
                    image='https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UL320_.jpg'
                    rating={3}
                />
                <Product
                    title='Fitbit Versa 2 Health and Fitness Smartwatch'
                    price={129}
                    image='https://m.media-amazon.com/images/I/51ow2RVO6OL._AC_UL320_.jpg'
                    rating={5}
                />
                <Product
                    title='Shockproof Protective Bumpers Phone Cases for iPhone 13'
                    price={11.99}
                    image='https://m.media-amazon.com/images/I/71Nh59L4FFL._AC_UL320_.jpg'
                    rating={3}
                />
            </div>

            <div className='home__row'>
                <Product
                    title='OnePlus Nord N200 | 5G Unlocked Android Smartphone'
                    price={239}
                    image='https://m.media-amazon.com/images/I/71DCZOdq92S._AC_UL320_.jpg'
                    rating={5}
                />
                <Product
                    title='(Refurbished) Apple iPhone 11, US Version, 64GB'
                    price={445}
                    image='https://m.media-amazon.com/images/I/61gYe3YaoxL._AC_UL320_.jpg'
                    rating={5}
                />
                <Product
                    title='Samsung Galaxy A12 (A127F) 128GB Dual SIM, GSM Unlocked Smartphone'
                    price={187.99}
                    image='https://m.media-amazon.com/images/I/81t8kQP6OQL._AC_UL320_.jpg'
                    rating={4}
                />
            </div>

            
            <div className='home__row'>
                <Product
                    title='2021 15.6 8G + 256G celeron J3455 high-Performance Quad-core CPU, 2PCS 4500mAh '
                    price={369}
                    image='https://m.media-amazon.com/images/I/61meo1ll-yL._AC_UY218_.jpg'
                    rating={4}
                />
                <Product
                    title='HP Stream 14 inches HD(1366x768) Display, Intel Celeron N4000 Dual-Core Processor, 4GB RAM'
                    price={224}
                    image='https://m.media-amazon.com/images/I/61gYe3YaoxL._AC_UL320_.jpg'
                    rating={5}
                />
                <Product
                    title='Microsoft Surface Laptop Studio - 14.4" Touchscreen - Intel® Core™ i7 - 32GB Memory - 2TB SSD - Platinum'
                    price={437.99}
                    image='https://m.media-amazon.com/images/I/61UGE9cZVlL._AC_UY218_.jpg'
                    rating={4}
                />
            </div>

            <div className='home__row'>
                <Product
                    title='HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mountin'
                    price={599.97}
                    image='https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL320_.jpg'
                    rating={5}
                />
                <Product
                    title='Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black'
                    price={999.97}
                    image='https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg'
                    rating={5}
                />
            </div>

            <div className='home__row'>
                <Product
                    title='Need Computer Desk 63 inches Large Size Desk Gaming Desk'
                    price={899.97}
                    image='https://m.media-amazon.com/images/I/6168BZ9HQTL._AC_UL320_.jpg'
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home
