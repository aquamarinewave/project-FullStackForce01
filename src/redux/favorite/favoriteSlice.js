import { createSlice } from '@reduxjs/toolkit';

import favoriteOperations from './favoriteOperations';

const favoriteSlice = createSlice({  
  name: "favorite",  
  initialState: {    
    items: {},
    error: null,  
  },  
  extraReducers: {
    [favoriteOperations.fetchModalDetails.fulfilled](state, action) {
      state.error = null;
      state.items = action.payload;
    },

    // [favoriteOperations.fetchAddToFavorite.fulfilled](state, action) {
    //   state.error = null;
    //   state.favoriteItems = action.payload.favoriteNoticeStore;
    // },

    // [favoriteOperations.fetchDeleteToFavorite.fulfilled](state, action) {
    //   state.error = null;
    //   const index = state.items.findIndex(({notice}) => notice._id === action.payload._id);      
    //   state.items.splice(index, 1); 
    // },
  },
});

export default favoriteSlice.reducer;

