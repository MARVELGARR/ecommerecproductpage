import React, { useEffect, useState } from "react";
import CartStore from "../carts component/cartStore";
import { useDispatch, useSelector } from "react-redux";
import { switching } from "../../../redux/features/isCartOpen";



const Cart: React.FC = () => {


  
  const cartItems = useSelector((state)=> state.carting.value)
  const count = useSelector((state)=> state.ammountter.value || 0)
  const [z, setZ] = useState()


  const it = cartItems.map((item)=> item.id)


  useEffect(() => {
    // Create an object to store the counts for each item ID in the cart
    const counts = {};
  
    // Loop through the items in the cart and update the counts object
    count.forEach((item) => {
      if (it.includes(item.id)) {
        // If the item ID is in the cartItems array, update the count
        counts[item.id] = (counts[item.id] || 0) + item.count;
      }
    });
  
    // Calculate the total count based on the counts object
    const totalCount = Object.values(counts).reduce((acc, value) => acc + value, 0);
  
    // Update the "z" state with the total count
    setZ(totalCount);
  
    console.log(it);
  }, [count, cartItems]);
  
  const isOpen  = useSelector((state)=> state.IsOpen.value)
  const dispatch = useDispatch()

  return (
    <div>

      <div className="relative  ">
        <div onClick={()=>dispatch(switching())}>

          <img className="w-6 h-6" src="/images/icon-cart.svg" alt="cart" />
        </div>

        { z > 0 && cartItems.length > 0 &&  (
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-[5px] bg-orange-500 text-white flex items-center justify-center text-sm">
            {z}
          </div>
        )}
      </div>
      { isOpen ? (<div className="absolute md:hidden md:w-[20rem] right-3 left-3 top-16">
        <CartStore  />
      </div>) : (<div></div>)}
      { isOpen ? (<div className="absolute hidden md:block md:right-0 md:left- md:z-50 md:w-[20rem]  top-16">
        <CartStore  />
      </div>) : (<div></div>)}
    </div>
  );
}

export default Cart;
