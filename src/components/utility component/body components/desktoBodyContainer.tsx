import { ReactNode } from "react"

interface desktopBodyContainerProps{
    children: ReactNode
}

const DesktopBodyContainer : React.FC<desktopBodyContainerProps> = ({children}) =>{
    return (
        <div className="  w-full py-14">{children}</div>
    )
}
export default DesktopBodyContainer