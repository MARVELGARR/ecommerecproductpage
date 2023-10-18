import { useDispatch, useSelector } from "react-redux"
import { select } from "../../../redux/features/desktopSlider"
import { product } from "../../../assets/util/data"
import { notViewing } from "../../../redux/features/viewModeSlice"
import SliderController from "./sliderController"
import DesktopController from "./desktopController"



const ImagePreview: React.FC = () =>{

    const dispatch = useDispatch()
    const data = useSelector((state)=> state.Desktop.value)
    const handleSelect = (id: string) =>{
        dispatch(select(id))
    }

    return (
        <div className=" hidden md:block">
            {product.slice(0,-1).map((item)=>{
                return (
                    <div className=" flex justify-between gap-14">

                        <div key={item.id} className=" min-w-[330px]  flex flex-col gap-3">
                            <div className="">
                                {item?.imageArray?.map((image)=>{
                                    return (
                                        <div key={image.id} className={`relative ${ data == image.id ? "" : "hidden" }`}>

                                            <img 
                                                src={image.src}
                                                alt={image.alt}
                                                className=' flex max-w-full h-[22rem] rounded-xl'
                                            />
                                            <div onClick={()=>dispatch(notViewing())} className="absolute top-0 -right-10 z-50">
                                                <img
                                                    src='/images/icon-close.svg'
                                                    alt="close preview"
                                                    className="  w-5 h-5 stroke-orange-5 "
                                                />
                                            </div>
                                            <DesktopController/>
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
                                                className=' filter brightness-110 rounded-lg w-16 h-14'
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ImagePreview