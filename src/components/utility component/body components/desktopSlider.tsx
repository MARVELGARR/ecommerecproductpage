import { useDispatch, useSelector } from 'react-redux';
import { product} from '../../../assets/util/data';
import { select } from '../../../redux/features/desktopSlider';
import DesktopProduct from './product component/desktop';
import { viewing } from '../../../redux/features/viewModeSlice';


const DesktopSlider : React.FC = () =>{

    const dispatch = useDispatch()
    const data = useSelector((state)=> state.Desktop.value || 0)
    const view = useSelector((state)=>state.View.value)

    const handleSelect = (id: string) =>{
        dispatch(select(id))
    }

    const handeleView = () =>{
        dispatch(viewing())
    }

    return (
        <div className="">
            {product.slice(0,-1).map((item)=>{
                return (
                    <div className=" flex justify-between gap-14">

                        <div key={item.id} className=" min-w-[330px]  flex flex-col gap-3">
                            <div className="">
                                {item?.imageArray?.map((image)=>{
                                    return (
                                        <div onClick={handeleView} key={image.id} className={` ${ data == image.id ? "" : "hidden" }`}>

                                            <img 
                                                src={image.src}
                                                alt={image.alt}
                                                className={`${ view ? " blur-sm opacity-80":""} flex max-w-full h-[22rem] rounded-xl`}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex gap-5">
                                {item.images?.map((imageItems)=>{
                                    return(
                                        <div onClick={()=>handleSelect(imageItems.id)} key={imageItems.id} className={`${data == imageItems.id ? " filter bg-orange-400 opacity-60 ring-2 ring-orange-600" : ""} rounded-lg`}>
                                            <img 
                                                src={imageItems.src}
                                                alt={imageItems.alt}
                                                className={` ${ view ? " blur-sm opacity-80":""} rounded-lg w-16 h-14`}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={`${ view ? " blur-sm opacity-80":""} min-w-[230px] max-h-[200px]`}>
                            <DesktopProduct data={item}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DesktopSlider