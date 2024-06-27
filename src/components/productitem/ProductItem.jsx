import React, { useContext } from 'react'
import './productItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ProductItem = ({id,name,price,description,image}) => {
  const {cartItems, addToCart,removeFromCart} =  useContext(StoreContext)
  return (
    <div className='product-item'>
      <div className="product-item-img-container">
        <img className='product-item-img' src={image} alt='product-image'/>
        {!cartItems[id] ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' />:
            <div className='product-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
            }
           
      </div>
      <div className="product-item-info">
        <div className="product-item-name">
           <p>{name}</p>
           <img src={assets.rating_starts} alt='rating'/>
        </div>
        <div className="product-item-description">
          <p>{description}</p>
        </div>
        <div className="product-item-price">
          <p><span>&#x20B9;</span>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem