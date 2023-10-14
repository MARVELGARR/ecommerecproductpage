import useActive from "../../../hooks/Active";
import Images from "./logo";


interface navBarProp{
    array: string[]
    index?: number;
    isOpen?: boolean;
    setIsOpen: (value: boolean)=>void;
}


const NavBar: React.FC<navBarProp> = ( {array, isOpen, setIsOpen }) =>{
    
    const { handleClick, active} =  useActive(0);

    return (
        <nav className=" px-10  py-16 h-screen flex w-full  bg-white">
            {isOpen &&(<div className="absolute cursor-pointer top-6 left-4" onClick={()=>setIsOpen(false)}><Images link="/images/icon-close.svg" alt="close"/></div>)}
            <ul className=" md:hidden flex flex-col gap-3 ">
                {array.map((item, index)=>{
                    return (
                        <li onClick={()=>handleClick(index)} key={index} className={`text-black ${active == index ? "font-bold " : ""}`}>{item}</li>
                    )
                })}

            </ul>
            <ul className=" hidden md:flex">
                {array.map((item, index)=>{
                    return (
                        <li onClick={()=>handleClick(index)} key={index} className={`text-black ${active == index ? "font-bold " : ""}`}>{item}</li>
                    )
                })}

            </ul>
        </nav>
    )
}

export default NavBar