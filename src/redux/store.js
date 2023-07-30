import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';
import petsReducer from './pets/petsSlice';
import newsRuducer from './news/newsSlice';
import noticesReducer from './notices/noticesSlice';
import friendsRuducer from './friends/friendsSlicer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authReducer),
//   pets: petsReducer,
// });

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    pets: petsReducer,
    news: newsRuducer,
    notices: noticesReducer,
    friends: friendsRuducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
