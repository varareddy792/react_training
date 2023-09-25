import { configureStore } from '@reduxjs/toolkit'
import addInputReducer from "./reducers/input/addInputSlice";

const store = configureStore({
  reducer: {
    input: addInputReducer
  },
})

export default store
