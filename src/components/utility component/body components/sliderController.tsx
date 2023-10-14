
import { controller } from "../../../assets/util/data";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../../redux/features/imageSliderSlice";
import { imageArray } from "../../../assets/util/data";
// Assuming your Redux state has a "counter" property
export type RootState = {
    counter: number; // Replace with your actual state structure
  };
  
const SliderController : React.FC = () =>{

    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.value)
    

    const handleClick = (index: number) =>{


        if( index === 0  ){
            if(count > imageArray.length -2){
                return;
            }
            dispatch(increment())
        }
        else{
            if(count < 1){
                return;
            }
            dispatch(decrement())
        }
        
    }


    return (
        <div className='absolute top-2/4 w-full px-10 flex justify-between items-center'>
            {controller.map((button, index) =>{
                return (
                    <div  key={index}>
                        <button  onClick={()=>handleClick(index)} type="button"  className={` flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-xs shadow-slate-100`}>
                            <img
                                src={button.src}
                                height={button.height}
                                width={button.width}
                                alt={button.alt}
                                className=" w-3 h-3 hover:text-orange-500"
                            />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default SliderController;