import React from "react";
import useCounter from "../../../hooks/useCounter";
import CartStore from '.'
import { useDispatch, useSelector } from "react-redux";

const Cart: React.FC = () => {
  
  const dispatch = useDispatch()
  const count = useSelector((state)=> state.)

  return (
    <div className="relative  ">
      <img className="w-6 h-6" src="/images/icon-cart.svg" alt="cart" />

      { count > 0 && (
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-[5px] bg-orange-700 text-white flex items-center justify-center text-sm">
          {count}
        </div>
      )}
    </div>
  );
}

export default Cart;
