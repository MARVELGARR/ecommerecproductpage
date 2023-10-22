import './App.css'
import Body from './components/main component/body'
import Header from './components/main component/header'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import MainHeader from './components/main component/mainHeader'
function App() {

  

  return (
    <div className={`  relative text-[16px]`}>
      <Provider store={store}>
        <div className="w-full md:px-20 xl:px-52 lg:px-32 md:flex md:flex-col  md:justify-center">

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
      </Provider>
    </div>
  )
}

export default App
