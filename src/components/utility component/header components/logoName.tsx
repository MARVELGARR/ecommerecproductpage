
interface logoProp {
    name: string;
}

const LogoName : React.FC <logoProp> = ({name}) =>{

    return <div className="text-2xl font-bold">{name}</div>
}
export default LogoName