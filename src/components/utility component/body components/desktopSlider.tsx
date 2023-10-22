import { useDispatch} from 'react-redux';
import { product} from '../../../assets/util/data';
import { select } from '../../../redux/features/desktopSlider';
import DesktopProduct from './product component/desktop';
import { viewing } from '../../../redux/features/viewModeSlice';
import { useAppSelector } from '../../../redux/hooks';





const DesktopSlider : React.FC = () =>{

    const dispatch = useDispatch()
    const dataId = useAppSelector((state)=> state.Desktop.value || 0)
    const view = useAppSelector((state)=>state.View.value)



    const handleSelect = (id: string) =>{
        dispatch(select(id))
    }

    const handeleView = () =>{
        dispatch(viewing())
    }

    return (
        <div className="w-full">
            {product.slice(0,-1).map((item)=>{
                return (
                    <div key={item.id} className=" w-full flex lg:gap-24 gap-14">

                        <div  className=" w-full flex flex-col gap-3">
                            <div className="flex fle-grow">
                                {item?.imageArray?.map((image)=>{
                                    return (
                                        <div onClick={handeleView} key={image.id} className={` w-full ${ dataId == image.id ? "" : "hidden" }`}>

                                            <img 
                                                src={image.src}
                                                alt={image.alt}
                                                className={` object-cover ${ view ? " blur-sm opacity-80":""} flex w-full h-[22rem] rounded-xl`}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex w-full gap-3 justify-between">
                                {item.images?.map((imageItems)=>{
                                    return(
                                        <div onClick={()=>handleSelect(imageItems.id)} key={imageItems.id} className={` w-full flex-grow cursor-pointer ${dataId == parseInt(imageItems.id) ? " filter bg-orange-400 opacity-60 ring-2 ring-orange-600 flex" : ""} rounded-lg`}>
                                            <img 
                                                src={imageItems.src}
                                                alt={imageItems.alt}
                                                className={` ${ view ? " blur-sm opacity-80":""} object-cover rounded-lg w-full h-20`}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={`${ view ? " blur-sm opacity-80":""} w-full flex flex-grow`}>
                            <DesktopProduct data={item} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DesktopSlider