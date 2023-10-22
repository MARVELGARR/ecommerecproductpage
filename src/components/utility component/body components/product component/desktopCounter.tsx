
import { increment, decrement } from "../../../../redux/features/productAmmountSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

interface desktopCounterProps{
    id: string,
    count: number,

}



const DesktopCounter: React.FC<{ data: desktopCounterProps}> = ({ data }) =>{

    const dispatch = useAppDispatch();
    const productCounter = useAppSelector((state)=> state.ammountter.value || 0)

    return(
        <div className="flex h-full items-center justify-between w-full ">
            <button onClick={()=>dispatch(decrement(data))} type="button" className=" ">
                <img 
                    src='/images/icon-minus.svg'
                    alt='minus'
                    className=" w-3 h-2"
                />
            </button>
            <div className="">
                {productCounter.find((item)=> item.id == data?.id)?.count || 0}
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

export default DesktopCounter;