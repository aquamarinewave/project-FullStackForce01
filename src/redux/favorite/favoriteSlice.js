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
    //   state.select = true;
    // },

    // [favoriteOperations.fetchDeleteToFavorite.fulfilled](state, action) {
    //   state.error = null;
    //   state.select = false;
    // },
  },
});

export default favoriteSlice.reducer;

