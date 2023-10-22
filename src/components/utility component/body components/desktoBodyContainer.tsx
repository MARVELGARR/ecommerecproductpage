import { ReactNode } from "react"

interface desktopBodyContainerProps{
    children: ReactNode
}

const DesktopBodyContainer : React.FC<desktopBodyContainerProps> = ({children}) =>{
    return (
        <div className="w-full px-3 justify-center md:px-24 lg:px-48 2xl:px-64  mt-20">{children}</div>
    )
}
export default DesktopBodyContainer