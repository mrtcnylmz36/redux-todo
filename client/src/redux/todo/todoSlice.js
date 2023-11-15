import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
  error: "",
};

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  const res = await fetch("http://localhost:4000/api/todos");
  const data = res.json();
  return data;
});

export const addTodo = createAsyncThunk("todo/addTodo", async (item) => {
  const res = await fetch("http://localhost:4000/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  const data = res.json();
  console.log("DATA", JSON.stringify(item));
  return data;
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  const res = await fetch(`http://localhost:4000/api/todos/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const data = res.json();
  return data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodo.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(getTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }),
      builder.addCase(getTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
      }),
      builder.addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
      });
    // builder.addCase(deleteTodo.fulfilled, (state, action) => {
    //   // console.log(action);
    //   // state.todos = action.payload;
    // });
  },
});

export default todoSlice.reducer;
