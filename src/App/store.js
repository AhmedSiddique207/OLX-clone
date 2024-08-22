import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CounterReducer from "../features/CounterSlice";
import UserReducer from "../features/UserSlice";
import LoginReducer from "../features/LoginSlice";


const rootReducer = combineReducers({
    counter: CounterReducer,
    user: UserReducer,
    login: LoginReducer,
    
});


const persistConfig = {
    key: 'root',
    storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
});

export const persistor = persistStore(store);
