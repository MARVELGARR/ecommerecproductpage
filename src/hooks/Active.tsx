import { useState } from "react";

interface activeHook{
    active: number | string | null;
    handleClick: (index: number) => void;
}

const useActive = ( initialState : string | number | null = null) : activeHook => {

    const [active, setActive] = useState(initialState)

    const handleClick = (index: number | string ) =>{
        setActive(index);
    } 

    return { handleClick, active };
}
export default useActive