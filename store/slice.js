import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   
 
}

export const Slice = createSlice({
    name: 'valores',
    initialState:{
    nombre: 'nombre',
},

    reducers : {
    guardarnombre: (state, action) => {
        state.nombre = action.payload; 
    }
    }
})



export const { guardarnombre } = Slice.actions