
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./sliderController";


interface mobileImageSliderProps {
    imageArray : Array<{
        src: string;
        height: number;
        width: number;
        alt: string;
    }>

}

const MobileImageSlider : React.FC<mobileImageSliderProps> = ({ imageArray }) =>{

    const count = useSelector((state: RootState) => state.counter.value)


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