import './App.css'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import MainComponent from './level1'
function App() {

  

  return (
    <div className={`  relative text-[16px]`}>
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    </div>
  )
}

export default App
