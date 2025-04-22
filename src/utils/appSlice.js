import { createSlice} from '@reduxjs/toolkit'

const appSlice=createSlice({
    name:'app',
    initialState:{
        isMenuTogle:true
    },
    reducers:{
        toggle:(state)=>{
            state.isMenuTogle=!state.isMenuTogle;
        }
    }
})


export const {toggle}=appSlice.actions;
export default appSlice.reducer;