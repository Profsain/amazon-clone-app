import React from 'react'
import '../styles/Product.css'
import {useStateValue} from '../StateProvider.js'

function Product({ id, title, price, image, rating }) {
    //add item to basket in the data layer
    const [{ basket }, dispatch] = useStateValue()
    console.log("Basket Contains >>>", basket)
    const addToBasket = () => {
        //dispatch item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{ title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{ price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}
                </div>
            </div>

            <img
                src={image}
                alt=""
            />
            <button onClick={addToBasket}>Add to Basket</button>  
            
        </div>
    )
}

export default Product
