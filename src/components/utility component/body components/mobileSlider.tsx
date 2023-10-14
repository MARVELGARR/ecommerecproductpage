import { ReactNode } from "react";

interface mobileSliderProps {
    children: ReactNode;
}

const MobileSliderContainer: React.FC <mobileSliderProps> = ({children}) =>{


    return(
        <div className=" -z-10">
            {children}
        </div>
    )
}
export default MobileSliderContainer;