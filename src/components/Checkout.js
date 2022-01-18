import React from 'react'
import '../styles/Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from '../StateProvider.js'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()
    //remove all product from cart
    const removeAllProduct = () => {
        dispatch({
            type: "REMOVE_ALL_FROM_BASKET"
        })
    }
    
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ads'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt='amazon ads banner'
                />
                <div className='checkout__title'>
                    <h3>{user.email }</h3>
                    <h2 className='checkout__titleText'>Shopping Cart</h2>
                    <p className='checkout__delete' onClick={removeAllProduct}>Delete all items</p>
                </div>
                {basket.map(item => (
                    <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
               
            </div>
            
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
