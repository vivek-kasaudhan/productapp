import React,{ useContext }  from 'react'
import { StoreContext } from '../context/StoreContext'
import '../pages/order/order.css'




const Order = () => {
  // const{   getTotalcartAmount} =  useContext(StoreContext)
  return (
    <form className='order'>
    <div className="order-left">
      <p className='title'>Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='firstname' />
        <input type="text"placeholder='lastname' />
      </div>
      <input type="text" placeholder='Email' />
      <input type="text" placeholder='Street' />
      <div className="multi-fields">
        <input type="text" placeholder='city' />
        <input type="text"placeholder='state' />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='pincode' />
        <input type="text"placeholder='country' />
      </div>
      <input type="text" placeholder='phone' />
    </div>
    {/* <div className="order-right">
    <div className="cart-total">
        <div>
          
          <div className="cart-total-details">
            <p>SubTotal</p>
            <p>{getTotalcartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{getTotalcartAmount()+2}</b>
          </div>
          <hr />
        </div>
        <button>Payment</button>
       </div>

       </div>
     */}
    

  </form>
  )
}

export default Order