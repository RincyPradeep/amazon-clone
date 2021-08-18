import React from 'react'
import './Products.css'
import StarIcon from '@material-ui/icons/Star';

const Products = ({id,title,price,rating,image}) => {
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
                    .map((_)=>(
                        <StarIcon className="star" />
                    ))                   
                }
            </div>
            <div className="product-image">
                <img src={image} alt={title} />
                <button>Add to cart</button>
            </div>
            
        </div>
    )
}

export default Products
