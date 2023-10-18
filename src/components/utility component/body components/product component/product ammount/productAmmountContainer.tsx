import { ReactNode } from "react";

interface productAmmountContainerProps {
    children: ReactNode;
}

const ProductAmmountContainer : React.FC<productAmmountContainerProps> = ({children}) =>{
    return (
        <div className=" flex md:my-3 bg-gray-200/50 items-center justify-center shadow-md rounded-lg h-12 md:w-[10rem] min-w-[80px] px-3">
            {children}
        </div>
    )
}
export default ProductAmmountContainer