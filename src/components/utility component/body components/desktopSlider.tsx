import { useDispatch} from 'react-redux';
import { product} from '../../../assets/util/data';
import { select } from '../../../redux/features/desktopSlider';
import DesktopProduct from './product component/desktop';
import { viewing } from '../../../redux/features/viewModeSlice';
import { useAppSelector } from '../../../redux/hooks';





const DesktopSlider : React.FC = () =>{

    const dispatch = useDispatch()
    const dataId = useAppSelector((state)=> state.Desktop.value || 0)
    



    const handleSelect = (id: string) =>{
        dispatch(select(id))
    }

    const handeleView = () =>{
        dispatch(viewing())
    }

    return (
        <div className=" ">
            {product.slice(0,-1).map((item)=>{
                return (
                    <div key={item.id} className="xl:gap-28 flex justify-between gap-14 ">

                        <div  className=" w-full min-w-[330px] 2xl:max-w-[32rem]  flex  flex-col gap-3">
                            <div className="  flex-grow">
                                {item?.imageArray?.map((image)=>{
                                    return (
                                        <div onClick={handeleView} key={image.id} className={` w-full ${ dataId == image.id ? "" : "hidden" }`}>

                                            <img 
                                                src={image.src}
                                                alt={image.alt}
                                                className={` w-full 2xl:max-h-[38rem]  xl:max-h-[24rem] md:h-[22rem] lg:h-full xl:h-full  object-cover  flex rounded-xl`}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex w-full xl:h-20 2xl:h-24 lg:h-16 md:h-16 justify-between gap-3">
                                {item.images?.map((imageItems)=>{
                                    return(
                                        <div onClick={()=>handleSelect(imageItems.id)} key={imageItems.id} className={` w-full flex flex-grow cursor-pointer ${dataId == parseInt(imageItems.id) ? " filter bg-orange-400 opacity-60 ring-2 ring-orange-600" : ""} rounded-lg`}>
                                            <img 
                                                src={imageItems.src}
                                                alt={imageItems.alt}
                                                className={` w-full h-full object-cover  rounded-lg `}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={`flex xl:mt-4 2xl:max-w-[25rem] 2xl:mt-20 flex-grow w-full  `}>
                            <DesktopProduct data={item} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DesktopSlider