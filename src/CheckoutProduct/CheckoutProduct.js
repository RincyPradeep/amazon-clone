import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({id,title,image,price,rating}) => {

    const [{basket},dispatch] = useStateValue();

    const removeFromCart =() =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,            
        })
    }
    return (
        <div className="checkout-product" key={id}>
            <img src={image} alt="product" className="checkout-product-image" />
            <div className="product-details">
                <h4>{title}</h4>
                <div className="product-price">
                    <p><small>Rs.</small><strong>{price}</strong></p>
                </div>           
                <div className="product-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_,index)=>(
                        <StarIcon className="star" key={index}/>
                    ))                   
                }
                </div>
                <button className="remove-btn" onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
