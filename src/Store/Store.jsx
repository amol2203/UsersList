import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from './UserSlice';


const Store = configureStore({
    reducer:{
        userReducer:userReducer,
    }
});

export default Store;


