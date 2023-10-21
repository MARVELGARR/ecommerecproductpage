
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../../../../redux/features/productAmmountSlice";
import { useAppSelector } from "../../../../../redux/hooks";

interface ProductAmmountCounterProps{
    id: string,
    company: string,
    title: string,
    description: string,
    price: string,
    previousPrice: string,
    percentage: string,
    count: number,
}


const ProductAmmountCounter: React.FC<{data : ProductAmmountCounterProps}> = ({ data }) =>{

    const dispatch = useDispatch();
    const productCounter = useAppSelector((state)=> state.ammountter.value || 0)

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