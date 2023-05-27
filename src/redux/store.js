import { configureStore } from '@reduxjs/toolkit';
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist";
import  storage  from 'redux-persist/lib/storage';
import eiserSlice from './eiserSlice';
import auth from './auth';

const persistConfig={
  key:"root",
  version:1,
  storage,
}
const persistedReducer=persistReducer(persistConfig,eiserSlice);

export const  store=configureStore({
  reducer: {
    eiser: persistedReducer,
    auth,
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:{
      ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
  })
})

export let persistor = persistStore(store);