import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch all users
export const fetchUser = createAsyncThunk('fetchUser', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
});

// Fetch a single user by ID
export const fetchUserById = createAsyncThunk('fetchUserById', async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: [], // List of users
    userDetails: null, // Selected user details
    status: 'idle', // Loading status
    error: null, // Error state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userList = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userDetails = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
