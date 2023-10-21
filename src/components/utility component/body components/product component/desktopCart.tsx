import { useDispatch } from "react-redux"
import { addToCart } from "../../../../redux/features/cartSlice"
import { desktopProps } from "./desktop"

const DesktopCart: React.FC < {data : desktopProps}>  = ( { data } ) =>{

    const dispatch = useDispatch()
    
    const handleCart = (data: desktopProps) => {
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

export default DesktopCart