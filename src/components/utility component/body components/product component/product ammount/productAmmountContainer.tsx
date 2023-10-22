import { ReactNode } from "react";

interface productAmmountContainerProps {
    children: ReactNode;
}

const ProductAmmountContainer : React.FC<productAmmountContainerProps> = ({children}) =>{
    return (
        <div className=" flex 2xl:w- md:w-28 xl:h-16 lg:w-32 xl:w-36 2xl:w-52 bg-gray-200/50 items-center justify-center shadow-md rounded-lg h-12  px-3">
            {children}
        </div>
    )
}
export default ProductAmmountContainer