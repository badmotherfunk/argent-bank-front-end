import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import newUserUpdate from './updateUserNameService'

const user = null

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess : false,
    isLoading: false,
    message: ''
}

// Login user
export const updateUser = createAsyncThunk('profile/userName', async (user, thunkAPI) => {
    try {
        return await newUserUpdate.updateUser(user)
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()       
        return thunkAPI.rejectWithValue(message)
    }
})

export const userNameSlice = createSlice({
    name: 'userName',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    // Vérifie les résultats en attente ou si tout s'est bien passé ou si la demande a été rejetée.
    extraReducers: (builder) => {
        builder
        .addCase(updateUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }
})

export const {reset} = userNameSlice.actions
export default userNameSlice.reducer