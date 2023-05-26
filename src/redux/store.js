import { configureStore } from '@reduxjs/toolkit'
import eiserSlice from './eiserSlice'
export default configureStore({
  reducer: {
    eiser: eiserSlice,
    
  }
})