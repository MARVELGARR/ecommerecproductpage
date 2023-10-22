import React, { useEffect, useState } from "react";
import CartStore from "../carts component/cartStore";
import { useDispatch } from "react-redux";
import { switching } from "../../../redux/features/isCartOpen";
import { useAppSelector } from "../../../redux/hooks";

// Define TypeScript types or interfaces for your state and props
interface CartItem {
  id: string;
  count: number;
  // Define other properties here
}

interface CartProps {
  // Define any props if needed
}

const Cart: React.FC<CartProps> = () => {
  const cartItems = useAppSelector((state) => state.carting.value);
  const count = useAppSelector((state) => state.ammountter.value || 0);
  const [z, setZ] = useState<number>(0);

  const it: string[] = cartItems.map((item) => item.id);

  useEffect(() => {
    const counts: { [id: string]: number } = {};

    // Loop through the items in the cart and update the counts object
    count.forEach((item: CartItem) => {
      if (it.includes(item.id)) {
        // If the item ID is in the cartItems array, update the count
        counts[item.id] = (counts[item.id] || 0) + item.count;
      }
    });

    // Calculate the total count based on the counts object
    const totalCount: number = Object.values(counts).reduce(
      (acc, value) => acc + value,
      0
    );

    // Update the "z" state with the total count
    setZ(totalCount);

    console.log(it);
  }, [count, cartItems, it]);

  const isOpen: boolean = useAppSelector((state) => state.IsOpen.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="relative">
        <div onClick={() => dispatch(switching())}>
          <img className="lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8" src="/images/icon-cart.svg" alt="cart" />
        </div>

        {z > 0 && cartItems.length > 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-[5px] bg-orange-500 text-white flex items-center justify-center text-sm">
            {z}
          </div>
        )}
      </div>
      {isOpen ? (
        <div className="absolute md:hidden md:w-[20rem] right-3 left-3 top-16">
          <CartStore />
        </div>
      ) : (
        <div></div>
      )}
      {isOpen ? (
        <div className="absolute hidden md:block md:right-0 md:left- md:z-50 md:w-[20rem]  top-16">
          <CartStore />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
