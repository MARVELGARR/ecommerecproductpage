
import LogoName from "../utility component/header components/logoName"
import NavBar from "../utility component/header components/navBar"
import Images from "../utility component/header components/logo"
import { useState } from "react"
import Cart from "../utility component/header components/cart"
import Profile from "../utility component/header components/profile"



const Header : React.FC = () =>{
    const arrays = ["collections", "men", "women", "about", "contact"]
    const [isOpen, setIsOpen] = useState(false)


    
    
    return (
        <div className={`  flex md:shadow-none  justify-between items-center p-3 h-18 shadow-sm shadow-slate-400`}>
            <div className="flex items-center gap-2">
                <div className=" md:hidden flex items-center">
                    { !isOpen && (<div className=" cursor-pointer" onClick={()=>setIsOpen(true)}><Images link="/images/icon-menu.svg" alt="menu"/></div>)}
                </div>
                <LogoName name="sneakers"/>
                { isOpen &&(<div className="md:hidden  absolute  left-0 top-0  w-3/4 ">
    
                    <NavBar setIsOpen={setIsOpen} isOpen={isOpen} array={arrays}/>

                </div>)}
            </div>
            <div className="flex item gap-2">

                <div className=" cursor-pointer">
                    <Cart />
                </div>
                <Profile>

                    <div className="w-6 h-6">
                        <Images  link="/images/image-avatar.png" alt="profile pic"/>
                    </div>
                </Profile>

            </div>
        </div>
    )
}
export default Header