import { ReactNode } from "react";

interface productAmmountContainerProps {
    children: ReactNode;
}

const ProductAmmountContainer : React.FC<productAmmountContainerProps> = ({children}) =>{
    return (
        <div className=" flex bg-gray-200/50 items-center justify-center shadow-md rounded-lg h-12 px-5 py-1">
            {children}
        </div>
    )
}
export default ProductAmmountContainer