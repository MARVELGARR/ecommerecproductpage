
interface image{
    link: string;
    alt: string;
}

const Images : React.FC <image> = ({link, alt}) =>{
    return (
        <img
            src={link}
            alt={alt}
            className=""
        />
    )
}

export default Images;