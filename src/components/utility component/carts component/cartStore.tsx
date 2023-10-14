import { useDispatch, useSelector } from "react-redux"
import { removeCart } from "../../../redux/features/cartSlice"

interface GoodsProps{
    Goods : Array<{
        company: string,
        title: string,
        description: string,
        price: string,
        previousPrice: string,
        percentage: string,
    }>
}

const CartStore: React.FC <GoodsProps> = ( ) =>{


    const dispatch = useDispatch()
    const items =  useSelector((state)=> state.carting.value)
    const count =  useSelector((state)=> state.ammountter.value)
    const totalPrice = []

    return (
        <div>
            {items.map((item)=>{
                <div className="">
                    <div className="">Cart</div>
                    <div className="">
                        <div className="">{item.title}</div>
                        <div className="">{item.price + count }</div>

                    </div>
                    <div className=""></div>
                </div>
            })}
        </div>
    )
}
export default CartStore