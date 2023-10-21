
import Cart from '../utility component/header components/cart'
import NavBar from '../utility component/header components/navBar'
import Profile from '../utility component/header components/profile'
import Logo from '/images/logo.svg'
import ProfilePic from '/images/image-avatar.png'

import { useAppSelector } from '../../redux/hooks'
import { useState } from 'react'

const MainHeader: React.FC = () =>{

    const arrays = ["collections", "men", "women", "about", "contact"]
    const view = useAppSelector((state)=>state.View.value)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={` ${ view ? " blur-sm ":""}  flex h-full items-center w-full justify-between px-10`}>
            <div className='flex h-full pt-8 gap-12 items-center'>

                <img 
                    src={Logo}
                    className="w-28 cover h-5"
                    alt="logo"
                />
                <NavBar array={arrays} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="flex h-full items-center gap-2">

                <div className="">
                    <Cart/>
                </div>
                <Profile>
                    <div className="">
                        <img 
                            src={ProfilePic}
                            alt="profile pic"
                            className=' rounded-full w-8 h-8'
                        />
                    </div>
                </Profile>
            </div>
        </div>
    )
}

export default MainHeader