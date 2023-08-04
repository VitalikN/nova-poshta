import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { ttnReducer } from './ttn/ttn-slice';


const ttnPersistConfig = {
  key: 'ttn',
  blacklist: [''],
  storage,
};


const persistedTtnReducer = persistReducer(ttnPersistConfig, ttnReducer);

export const store = configureStore({
  reducer: {
    ttn: persistedTtnReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);