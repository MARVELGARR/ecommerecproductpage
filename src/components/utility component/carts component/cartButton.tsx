import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/features/cartSlice"

interface cartButtonProps{
    id: string;
    count: number;
    src: string;
    imageArray?: {
        id: number;
        src: string;
        height: number;
        width: number;
        alt: string;
    }[];
    images: {
        id: string;
        src: string;
        alt: string;
    }[];
    company: string;
    title: string;
    description: string;
    price: string;
    previousPrice: string;
    percentage: string;
}

const CartButton: React.FC<{ data: cartButtonProps}> = ( { data } ) =>{

    const dispatch = useDispatch()

    
    const handleCart = (data : cartButtonProps) => {
        dispatch(addToCart(data))
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