
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../../../redux/features/productAmmountSlice";



const ProductAmmountCounter: React.FC = ({ data }) =>{

    const dispatch = useDispatch();
    const productCounter = useSelector((state)=> state.ammountter.value || 0)

    return(
        <div className="flex items-center justify-between w-full ">
            <button onClick={()=>dispatch(decrement(data))} type="button" className="">
                <img 
                    src='/images/icon-minus.svg'
                    alt='minus'
                    className=" w-3 h-2"
                />
            </button>
            <div className="">
                {productCounter.find((item)=> item.id == data.id)?.count || 0}
            </div>
            <button onClick={()=>dispatch(increment(data))} type='button' className="">
                <img 
                    src='/images/icon-plus.svg'
                    alt='plus'
                    className="w-3 h-3"
                />
            </button>
        </div>
    )
}

export default ProductAmmountCounter;