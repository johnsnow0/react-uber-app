import { configureStore } from '@reduxjs/toolkit'
import navSlice from './slices/navSlice'

export default configureStore({
  reducer: {
    nav: navSlice
  }
})