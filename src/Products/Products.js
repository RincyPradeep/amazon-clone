import React from 'react'
import './Products.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

const Products = ({id,title,price,rating,image}) => {

    const [{basket},dispatch] = useStateValue();

    const addToCart =() =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <h3>{title}</h3>
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
            <div className="product-image">
                <img src={image} alt={title} />
                <button onClick={addToCart}>Add to cart</button>
            </div>
            
        </div>
    )
}

export default Products
