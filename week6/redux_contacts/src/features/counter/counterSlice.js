import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    users: []
  },
  reducers: {
    addName: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    addPhone: (state, action) => {
      state.users += action.payload;
    },
    addEmail: state => {
      state.users = [...state.users]
    },
  },
});

export const { addName, addPhone, addEmail } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const deleteUser = user => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(user));
//   });
// };
//contact = contact.filter((item, index) => index !== action.payload)
export const deleteUser = (user, index) => dispatch => {
  addEmail.filter((user, index) => index !== addEmail)
}


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUsers = state => state.counter.users;

export default counterSlice.reducer;