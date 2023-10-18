import { ReactNode } from "react"

interface desktopBodyContainerProps{
    children: ReactNode
}

const DesktopBodyContainer : React.FC<desktopBodyContainerProps> = ({children}) =>{
    return (
        <div className=" px-20 xl:px-52 lg:px-32 w-screen py-10">{children}</div>
    )
}
export default DesktopBodyContainer