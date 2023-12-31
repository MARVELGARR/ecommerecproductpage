
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
        <div className="flex w-full flex-col 2xl:gap-7 gap-3 py-5 mt-3">
            <div className=" text-orange-600 text-xl flex-wrap flex lg:text-2xl 2xl:text-4xl  font-bold">{data?.company}</div>
            <div className=" text-3xl lg:text-4x 2xl:text-5xl flex flex-wrap font-bold pt-2">{data?.title}</div>
            <div className="mt-2 text-lg lg:text-xl xl:text-xl 4xl:text-4xl flex-wrap flex leading-8">{data?.description}</div>
            <div className="flex lg:flex-nowrap items-center gap-3">

            <div className="flex items-center gap-4 mt-3">
                <ProductAmmountContainer>
                    <DesktopCounter data={data}/>
                </ProductAmmountContainer>
                <div className="  md:w-40  lg:w-48  xl:w-52 2xl:w-72 4xl:w-60">

                    <DesktopCart data={data}  />
                </div>
            </div>
        </div>
        </div>
    )
}
export default DesktopProduct