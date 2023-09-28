import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import profileService from './profileService'

const initialState = {
    user: '',
    isError: false,
    isSuccess : false,
    isLoading: false,
    message: ''
}

export const userProfile = createAsyncThunk('profile/userName', async (thunkAPI) => {
    try {
        return await profileService.userProfile()
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()       
        return thunkAPI.rejectWithValue(message)
    }
})

export const profileSlice = createSlice({
    name: 'profile',
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
        .addCase(userProfile.pending, (state) => {
            state.isLoading = true
        })
        .addCase(userProfile.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(userProfile.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }
})

export const {reset} = profileSlice.actions
export default profileSlice.reducer