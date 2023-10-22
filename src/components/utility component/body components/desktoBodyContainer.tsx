import { ReactNode } from "react"

interface desktopBodyContainerProps{
    children: ReactNode
}

const DesktopBodyContainer : React.FC<desktopBodyContainerProps> = ({children}) =>{
    return (

        <div className="w-full xl:justify-center xl:flex xl:px-16 lg:px-10 mt-20">{children}</div>


    )
}
export default DesktopBodyContainer