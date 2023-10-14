import { ReactNode } from "react";

interface productContainerProps {
    children: ReactNode;
}

const ProductContainer : React.FC<productContainerProps> = ({children}) =>{
    return (
        <div className="px-10 py-5">
            {children}
        </div>
    )
}
export default ProductContainer