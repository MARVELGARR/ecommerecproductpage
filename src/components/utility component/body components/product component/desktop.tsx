
import ProductAmmountContainer from "./product ammount/productAmmountContainer"

import DesktopCounter from "./desktopCounter"
import DesktopCart from "./desktopCart"



const DesktopProduct : React.FC = ({ data }) =>{

    return (
        <div className="flex flex-col py-5 mt-3">
            <div className=" text-orange-600 text-lg font-bold">{data?.company}</div>
            <div className=" text-3xl font-bold pt-2">{data?.title}</div>
            <div className="mt-2 text-lg leading-8">{data?.description}</div>
            <div className="flex items-center gap-3">

                <ProductAmmountContainer>
                    <DesktopCounter data={data}/>
                </ProductAmmountContainer>
                <div className="md:w-[16rem]">

                    <DesktopCart data={data}  />
                </div>
            </div>
        </div>
    )
}
export default DesktopProduct