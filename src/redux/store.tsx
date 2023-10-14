import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './features/imageSliderSlice'
import AmmounterReducer from './features/productAmmountSlice'
import CartReducer from './features/cartSlice'
import totalCartReducer from './features/totalGoodsSlice'


// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    counter: counterReducer,
    ammountter: AmmounterReducer,
    carting: CartReducer,
    Total: totalCartReducer
  }
})