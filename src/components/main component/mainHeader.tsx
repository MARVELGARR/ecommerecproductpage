
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
        <div className={` ${ view ? " blur-sm ":""}  flex h-full items-center w-full justify-between border-b-gray-400 border-b-[1px]`}>
            <div className='flex h-full pt-8 md:gap-5 lg:gap-10 items-center'>

                <img 
                    src={Logo}
                    className="md:w-24 lg:w-32 cover h-5"
                    alt="logo"
                />
                <NavBar array={arrays} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="flex h-full items-center md:gap-2 lg:gap-4">

                <div className=" cursor-pointer">
                    <Cart/>
                </div>
                <Profile>
                    <div className="">
                        <img 
                            src={ProfilePic}
                            alt="profile pic"
                            className=' rounded-full lg:w-16 lg:h-16 md:w-10 md:h-10'
                        />
                    </div>
                </Profile>
            </div>
        </div>
    )
}

export default MainHeader