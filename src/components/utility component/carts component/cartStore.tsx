import { useDispatch } from "react-redux"
import { removeCart } from "../../../redux/features/cartSlice"
import { newTodoProps } from "../../../redux/features/cartSlice"
import { useEffect } from "react"
import { useAppSelector } from "../../../redux/hooks"

const CartStore: React.FC = () =>{

    const goods = useAppSelector((state)=> state.carting.value)
    

    const productCounter = useAppSelector((state)=> state.ammountter.value || 0)
    
    const dispatch = useDispatch()
        
    useEffect(()=>{
        console.log(productCounter.find((item)=> item)?.count || 0)
    },[productCounter])

    return (
        <div className="h-fit flex flex-col gap-3 px-7 py-4 bg-white rounded-md shadow-md">
            <div className="">Cart</div>
            { goods.length > 0 ? (<div className="flex flex-col gap-3">

                {goods.map((item: newTodoProps , index: number)=>{
                    return(
                        <div key={index} className="flex justify-between item-center text-md mt-2">
                            <div>
                                <img 
                                    src={item.src}
                                    alt="product image"
                                    className = 'w-10 h-10 cover rounded-md'
                                />
                            </div>
                            <div className="">
                                <div className="">{item.title}</div>
                                <div className="">{item.price} {' X'} {productCounter.find((items)=> items.id == item.id)?.count || 0} <span>${(parseInt(item.price.slice(1, -1)) * (productCounter.find((item)=> item)?.count || 0)).toString() }</span></div>

                            </div>
                            <div onClick={()=> dispatch(removeCart(item))} className="">
                                <img
                                    src="/images/icon-delete.svg"
                                    alt='delet icon'
                                    className='w-3 h-5'
                                />
                            </div>
                            
                        </div>
                    )
                })}
            </div>):(
                <div className=" flex justify-center items-center h-20">
                    Your Cart is empty
                </div>
            )}
        </div>
    )
}
export default CartStore