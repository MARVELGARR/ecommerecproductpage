import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './features/imageSliderSlice'
import AmmounterReducer from './features/productAmmountSlice'
import CartReducer from './features/cartSlice'
import totalCartReducer from './features/isCartOpen'
import isOpenReducer from './features/isCartOpen'
import  DesktopReducer  from './features/desktopSlider'
import ViewModeReducer from './features/viewModeSlice'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    counter: counterReducer,
    ammountter: AmmounterReducer,
    carting: CartReducer,
    Total: totalCartReducer,
    IsOpen: isOpenReducer,
    Desktop: DesktopReducer,
    View: ViewModeReducer
  }
})