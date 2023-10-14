import { useDispatch, useSelector } from "react-redux"



const CartStore: React.FC = () =>{

    const goods = useSelector((state)=> state.carting.value)

    return (
        <div className="h-fit p-2  bg-white">
            <div className="text-green-200">Cart</div>
            {goods.map((item)=>{
                return(
                    <div className="">
                        <div className="">
                            <div className="">{item.title}</div>
                            <div className="">{item.price}</div>

                        </div>
                        <div className=""></div>
                    </div>
                )
            })}
        </div>
    )
}
export default CartStore