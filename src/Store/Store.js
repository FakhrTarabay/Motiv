import { configureStore } from '@reduxjs/toolkit'
import  userDataReducer  from './userStateSlice'
export const store = configureStore({
  reducer: {
    userData:userDataReducer,
  },
})