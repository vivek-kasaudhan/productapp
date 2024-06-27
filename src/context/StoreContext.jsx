import { createContext,useEffect,useState } from "react";
import { product_list } from "../assets/assets";



export const StoreContext = createContext(null)


const StoreContextProvider = ({children})=>{

    const[cartItems,setCartItems] = useState({})

    // Add to cart
    const addToCart = (itemId)=>{
      if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
      }else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
    }
   
    //remove from cart
    const removeFromCart =  (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
   
      
    useEffect(()=>{
        console.log(cartItems)
    },[])

    // store of product
const store = {
    product_list,
    addToCart,
    cartItems,
    setCartItems,
    removeFromCart,

}

// call it in useEffect to get it initial time at any page


    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;