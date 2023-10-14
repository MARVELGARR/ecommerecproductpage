import './App.css'
import Body from './components/main component/body'
import Header from './components/main component/header'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {


  return (
    <div className="relative text-[16px]">
      <Provider store={store}>
        <div className='sticky bg-white z-20 top-0'>

          <Header/>
        </div>
        <div className=''>

          <Body/>
        </div>
      </Provider>
    </div>
  )
}

export default App
