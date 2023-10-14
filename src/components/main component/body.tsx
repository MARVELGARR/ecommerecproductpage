import MobileImageSlider from "../utility component/body components/mobileImageSlider";
import MobileSliderContainer from "../utility component/body components/mobileSlider";
import { imageArray } from "../../assets/util/data";
import SliderController from "../utility component/body components/sliderController";
import ProductContainer from "../utility component/body components/product component/productContainer";
import Products from "../utility component/body components/product component/products";
import { product } from "../../assets/util/data";

const Body : React.FC = () =>{



    return (
        <div className="relative z-10">
            <MobileSliderContainer>
                <MobileImageSlider imageArray={imageArray}/>
                <SliderController/>
            </MobileSliderContainer>

            <ProductContainer>
                <Products product={product}/>
            </ProductContainer>
        </div>
    )
}

export default Body;