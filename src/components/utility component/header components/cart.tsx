import React from "react";
import CartStore from "../carts component/cartStore";
import { useSelector } from "react-redux";
const Cart: React.FC = () => {


  const count = useSelector((state)=> state.ammountter.value)


  return (
    <div>

      <div className="relative  ">
        <img className="w-6 h-6" src="/images/icon-cart.svg" alt="cart" />

        { count > 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-[5px] bg-orange-700 text-white flex items-center justify-center text-sm">
            {count}
          </div>
        )}
      </div>
      <div className="absolute right-3 left-3 top-10">
        <CartStore  />
      </div>
    </div>
  );
}

export default Cart;
