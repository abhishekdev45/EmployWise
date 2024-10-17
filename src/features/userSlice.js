import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, updateUser, deleteUser } from "../api/userApi";

// Fetch users from API
export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (page, { rejectWithValue }) => {
    try {
      const response = await fetchUsers(page);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update user details
export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const response = await updateUser(id, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete user
export const removeUser = createAsyncThunk(
  "user/removeUser",
  async (id, { rejectWithValue }) => {
    try {
      await deleteUser(id);
      return id; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    filteredUsers: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 0,
    searchQuery: "",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredUsers = state.users.filter((user) =>
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.filteredUsers = action.payload.data; 
        state.totalPages = action.payload.total_pages;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        
        if (index !== -1) {
          
          state.users[index] = {
            ...state.users[index], 
            ...action.payload 
          };
        
          state.filteredUsers = state.users.filter((user) =>
            `${user.first_name} ${user.last_name}`
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase())
          );
        }
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
        state.filteredUsers = state.filteredUsers.filter((user) => user.id !== action.payload);
      });
  },
});

export const { setCurrentPage, setSearchQuery } = userSlice.actions;
export default userSlice.reducer;
