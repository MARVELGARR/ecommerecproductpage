import { ReactNode } from "react";

interface profileProps {
    children: ReactNode;
}

const Profile: React.FC<profileProps> = ({children}) =>{
    return (
        <div className=" cursor-pointer">{children}</div>
    )
}
export default Profile