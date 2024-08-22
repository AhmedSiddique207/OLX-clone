import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        clearUsers(state) {
            return [];
        },
    },
});

export const { addUser, clearUsers } = UserSlice.actions;
export default UserSlice.reducer;

