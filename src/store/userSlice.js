import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            if (!response.ok) {
                throw new Error('Server error.')
            }

            const data = await response.json()

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async function (id, {rejectedWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.')
            }
            dispatch(removeUser({id}))
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async function ({id, user}, {rejectedWithValue, dispatch}) {
        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    user
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })

            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.')
            }
            const data = await response.json()

            dispatch(editUser({id, user: data.user}))
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const createUser = createAsyncThunk(
    'users/updateUser',
    async function (user, {rejectedWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/`, {
                method: 'POST',
                body: JSON.stringify({
                    ...user
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })

            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.')
            }
            const data = await response.json()

            dispatch(addUser(data))
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        addUser(state, action) {
            const user = action.payload;
            state.users.push({...user, userId: user.id})
            state.loading = false;
        },
        removeUser(state, action) {
            state.users = state.users.filter(user => user.id !== action.payload.id)
            state.loading = false;
        },
        editUser(state, action) {
            const {id, user} = action.payload;
            const index = state.users.findIndex((item) => item.id === id);
            state.loading = false;
            if (index !== -1) {
                state.users[index] = user;
            }
        }
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    }
})

export const {addUser, removeUser, editUser} = userSlice.actions;

export default userSlice.reducer;