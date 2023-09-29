import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import updateUserNameReducer from "../features/updateUserName/updateUserNameSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        newUserName: updateUserNameReducer,
    },  
})