import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import newUserUpdate from './updateUserNameService'

const initialState = {
    data: null,
    isError: false,
    isSuccess : false,
    isLoading: false,
    message: ''
}

// Update userName
export const updateUser = createAsyncThunk('profile/newUserName', async (data, thunkAPI) => {
    try {
        return await newUserUpdate.updateUser(data)
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
        resetUserName: (state) => {
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
            state.data = action.payload
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.data = null
        })
    }
})

export const {resetUserName} = userNameSlice.actions
export default userNameSlice.reducer