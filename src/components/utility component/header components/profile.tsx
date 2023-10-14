import { ReactNode } from "react";

interface profileProps {
    children: ReactNode;
}

const Profile: React.FC<profileProps> = ({children}) =>{
    return (
        <div className="">{children}</div>
    )
}
export default Profile