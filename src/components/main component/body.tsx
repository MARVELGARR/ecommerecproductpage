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

            
            <div className=" z-10">
                <div className={`  md:hidden `}>

                    <MobileSliderContainer>
                        <MobileImageSlider imageArray={imageArray}/>
                        <SliderController/>
                    </MobileSliderContainer>

                    <ProductContainer>
                        <Products />
                    </ProductContainer>
                </div>
                <div className={` px-5  hidden md:flex`}>
                    <DesktopBodyContainer>
                        <DesktopSlider/>
                    </DesktopBodyContainer>
                </div>
                <div className={` ${ view ? "" : " hidden" }  absolute backdrop-blur-sm backdrop-brightness-50 backdrop-filter flex justify-center items-center  filter  w-full z-50 top-0 right-0 bottom-0 `}>

                    { view &&(<ImagePreview/>)}
                </div>
            </div>
        </div>
    )
}

export default Body;