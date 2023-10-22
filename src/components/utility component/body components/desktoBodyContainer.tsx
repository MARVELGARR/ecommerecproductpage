import { ReactNode } from "react"

interface desktopBodyContainerProps{
    children: ReactNode
}

const DesktopBodyContainer : React.FC<desktopBodyContainerProps> = ({children}) =>{
    return (
<<<<<<< HEAD
        <div className="w-full px-3 justify-center md:px-24 lg:px-48 2xl:px-64  mt-20">{children}</div>
=======
        <div className="  w-full py-14">{children}</div>
>>>>>>> 36f12fbf662bf7748e92f9804ef0ee4cd17e2ae7
    )
}
export default DesktopBodyContainer