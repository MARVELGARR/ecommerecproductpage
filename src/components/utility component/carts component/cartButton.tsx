import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../../redux/features/cartSlice"

const CartButton: React.FC = ( { data } ) =>{

    const dispatch = useDispatch()
    const items =  useSelector((state)=> state.carting.value)
    const handleCart = (data: []) => {
        dispatch(addToCart(data))
        console.log(items)
    }



    return (
        <div>
            <button onClick={()=>handleCart(data) } className=" w-full h-12 rounded-md flex bg-orange-700/100 filter brightness-[2]  items-center justify-center gap-3" type="button">
                <img 
                    src="/images/icon-cart.svg"
                    alt="cart icon"
                    className=""
                />
                <div> Add to cart </div>
            </button>
        </div>
    )
}

export default CartButton