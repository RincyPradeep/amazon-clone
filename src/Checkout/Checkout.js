import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider'
import SubTotal from '../SubTotal/SubTotal';
import './Checkout.css'

const Checkout = () => {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
        <div className="checkout-left">
            <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="Ad" className="checkout-ad" />       
        {
            basket?.length === 0 ?
            (
            <div>
                <h1>Your shopping cart is empty</h1>
                <p>You have no items in your basket.To buy one or more items, click "Add to cart" next to the item.</p>
            </div>
            ):
            (
                <div>
                    <h1>Your shopping cart</h1>
                    {
                        basket.map((item)=>(
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))
                    }
                </div>
            )            
        }
        </div>
        {
            basket.length > 0 && 
            <div className="checkout-right">
                <SubTotal />
            </div>
        }
        </div>
    )
}

export default Checkout
