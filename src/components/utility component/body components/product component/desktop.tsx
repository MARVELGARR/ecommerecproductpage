
import ProductAmmountContainer from "./product ammount/productAmmountContainer"

import DesktopCounter from "./desktopCounter"
import DesktopCart from './desktopCart';


export interface desktopProps{
    id: string,
    count: number,
    src: string,
    imageArray: {
        id: number,
        src: string,
        height: number,
        width: number,
        alt: string,
    }[],
    images: {
        id: string,
        src: string,
        alt: string,
    }[];
    company: string,
    title: string,
    description: string,
    price: string,
    previousPrice: string,
    percentage: string,
    
}


const DesktopProduct : React.FC<{ data: desktopProps}> = ( { data }) =>{

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