
import React from "react";
import { useAppSelector } from "../../../redux/hooks";


interface mobileImageSliderProps {
    imageArray : Array<{
        src: string;
        height: number;
        width: number;
        alt: string;
    }>

}

const MobileImageSlider : React.FC<mobileImageSliderProps> = ({ imageArray }) =>{

    const count = useAppSelector((state) => state.counter.value)


    return (


        <div>

            {imageArray.map((image, index)=>{
                return (
                    <img
                        key={index}
                        src={image.src}
                        height={image.height}
                        width={image.width}
                        alt={image.alt}
                        className={` ${ count === index ? "" : "hidden" }  w-full bg-cover`}
                    />
                )
            })}
        </div>
    )
}

export default MobileImageSlider