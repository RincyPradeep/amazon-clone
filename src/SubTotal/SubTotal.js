import React from 'react'
import './SubTotal.css'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'

const SubTotal = () => {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value)=>(
                    <>
                        <h3>
                            Subtotal ({basket.length} items) :<strong>{`${value}`}</strong>
                        </h3>
                        <small className="subtotal-gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator ={true}
                prefix={'$'}
            />
            
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
