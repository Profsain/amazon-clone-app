import React from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
    const btnclick = () => {
        console.log('Checkout Click')
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal (0 Items): <strong>0</strong></p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />     
            <button
                className='subtotal__btn'
                onClick={btnclick}
            >
                Proceed to checkout
            </button>
        </div>
    )
}

export default Subtotal
