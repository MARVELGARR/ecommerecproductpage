import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './features/imageSliderSlice'
import AmmounterReducer from './features/productAmmountSlice'
import CartReducer from './features/cartSlice'
import totalCartReducer from './features/isCartOpen'
import isOpenReducer from './features/isCartOpen'
import  DesktopReducer  from './features/desktopSlider'
import ViewModeReducer from './features/viewModeSlice'

// eslint-disable-next-line react-refresh/only-export-components
export const store = configureStore({
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch