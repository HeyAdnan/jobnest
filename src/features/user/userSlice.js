import{createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { react } from 'react';
import { toast } from 'react-toastify'
import customFetch from '../../utils/axios'
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localStorage';
const initialState = 
{
    isLoading : false,
    isSidebarOpen : false,
    user : getUserFromLocalStorage() , 
}
export const registerUser = createAsyncThunk('user/registerUser', async(user, thunkApi)=>{
    try {
        const res = await customFetch.post('/auth/register', user);
        console.log(res);
        return res.data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.msg);
        
        
    }
})
export const loginUser = createAsyncThunk('user/loginUser', async(user, thunkApi)=>{
    try {
        const res = await customFetch.post('/auth/login', user);
        console.log(res);
        return res.data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.msg);
        
        
    }
})
export const updateUser = createAsyncThunk('user/updateUser',async(user,thunkAPI)=>{
    try {
        const res = await customFetch.patch('/auth/updateUser', user,{
            headers: {
              authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
          });
        console.log(res);
        return res.data;

    } catch (error) {
        if(error.response.status === 401){
            thunkAPI.dispatch(logoutUser());
            
            return thunkAPI.rejectWithValue("Unauthorized, Please login again!!");
        }
        return thunkAPI.rejectWithValue(error.response.data.msg);
        
        
    }
})

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        toggleSidebar:(state)=>{
            state.isSidebarOpen = !state.isSidebarOpen; 
        },
        logoutUser:(state,{payload})=>{
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
            if(payload){
                toast.success(payload);
            }
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending, (state,action)=>{
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state,{payload})=>{
            state.isLoading = false;
            
             const {user} = payload;
             state.user = user;
             addUserToLocalStorage(user);
             toast.success(`Hello ${user.name}`);
            
        })
        .addCase(registerUser.rejected, (state,action)=>{
            state.isLoading = false;
            // toast.error(action.payload);
            toast.error(action.payload);
        })
        .addCase(loginUser.pending, (state,action)=>{
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state,{payload})=>{
            state.isLoading = false;
            const {user} = payload;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Welcome Back ${user.name}`);
        })
        .addCase(loginUser.rejected, (state,action)=>{
            state.isLoading = false;
            // toast.error(action.payload);
            toast.error(action.payload);
        })
        .addCase(updateUser.pending, (state,action)=>{
            state.isLoading = true;
        })
        .addCase(updateUser.fulfilled, (state,{payload})=>{
            state.isLoading = false;
            const {user} = payload;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`User Updated Successfully!!`);
        })
        .addCase(updateUser.rejected, (state,action)=>{
            state.isLoading = false;
            // toast.error(action.payload);
            toast.error(action.payload);
        })
    }
        
    ,
    
});
export const {toggleSidebar, logoutUser} = userSlice.actions;
export default userSlice.reducer;