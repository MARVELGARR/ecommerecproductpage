import MobileImageSlider from "../utility component/body components/mobileImageSlider";
import MobileSliderContainer from "../utility component/body components/mobileSlider";
import { imageArray } from "../../assets/util/data";
import SliderController from "../utility component/body components/sliderController";
import ProductContainer from "../utility component/body components/product component/productContainer";
import Products from "../utility component/body components/product component/products";
import DesktopBodyContainer from "../utility component/body components/desktoBodyContainer";
import DesktopSlider from "../utility component/body components/desktopSlider";
import ImagePreview from "../utility component/body components/ImagePreview";
import { useAppSelector } from "../../redux/hooks";



const Body : React.FC= () =>{

    const view = useAppSelector((state)=>state.View.value)

    return (
        <div className=''>

            <div className={` absolute inset-0 ${ view ? "":"hidden"} z-10 bg-gray-600 filter opacity-70`}></div>
            <div className="relative z-10">
                <div className={`  md:hidden `}>

                    <MobileSliderContainer>
                        <MobileImageSlider imageArray={imageArray}/>
                        <SliderController/>
                    </MobileSliderContainer>

                    <ProductContainer>
                        <Products />
                    </ProductContainer>
                </div>
                <div className={`${ view ? " bg-gray-400 opacity-80":""} hidden justify-center w-full md:flex`}>
                    <DesktopBodyContainer>
                        <DesktopSlider/>
                    </DesktopBodyContainer>
                </div>
                <div className="absolute z-30 top-10 right-60">

                    { view &&(<ImagePreview/>)}
                </div>
            </div>
        </div>
    )
}

export default Body;