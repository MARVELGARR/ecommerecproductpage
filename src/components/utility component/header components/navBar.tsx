import useActive from "../../../hooks/Active";
import Images from "./logo";


interface navBarProp{
    array: string[]
    index?: number;
    isOpen?: boolean;
    setIsOpen: (value: boolean) => void;
}


const NavBar: React.FC<navBarProp> = ( {array, isOpen, setIsOpen }) =>{
    
    const { handleClick, active} =  useActive(0);

    return (
        <nav className=" md:h-full md:px-0 md:py-0 px-10  py-16 h-screen flex w-full  bg-white">
            {isOpen &&(<div className="absolute cursor-pointer top-6 left-4" onClick={()=>setIsOpen(false)}><Images link="/images/icon-close.svg" alt="close"/></div>)}
            <ul className=" md:hidden flex flex-col gap-3 ">
                {array.map((item, index)=>{
                    return (
                        <li onClick={()=>handleClick(index)} key={index} className={`text-black cursor-pointer ${active == index ? "font-bold " : ""}`}>{item}</li>
                    )
                })}

            </ul>
            <ul className=" hidden pt-[21px] md:pt-[27px] w-full z-40 md:gap-2 lg:gap-3 xl:gap-6 md:flex">
                {array.map((item, index)=>{
                    return (
                        <li key={index} className="cursor-pointer relative">

                            <div onClick={()=>handleClick(index)} className={`text-black md:text-md lg:text-lg ${active == index ? "font-bold " : ""}`}>{item}</div>
                            <span className={` ${active == index ? " " : " hidden"} bottom-0 absolute w-full h-1 bg-orange-600`}></span>
                        </li>
                    )
                })}

            </ul>
        </nav>
    )
}

export default NavBar