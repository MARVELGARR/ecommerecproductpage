import Body from "./components/main component/body"
import Header from "./components/main component/header"
import MainHeader from "./components/main component/mainHeader"
import { useAppSelector } from "./redux/hooks"

const MainComponent : React.FC = () =>{

    const view = useAppSelector((state)=> state.View.value)

    return(
        <div className={` ${ view ? " ": ""} z-10 w-full md:px-20 xl:px-52 lg:px-28 md:flex md:flex-col  md:justify-center`}>

            <div className={`md:hidden md:relative sticky bg-white z-20 top-0`}>

                <Header/>
            </div>
            <div className=' h-28 w-full md:flex hidden'>
                <MainHeader/>
            </div>
            <div className=''>

                <Body/>
            </div>
        </div>
    )
}

export default MainComponent