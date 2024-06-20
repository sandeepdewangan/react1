import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAddress } from "../../services/apiGeoLocation";

// Thunk
export const fetchAddress = createAsyncThunk(
  // arg:1: action type name, arg:2: thunk function
  "user/fetchAddress",
  async function () {
    const pos = {
      latitude: 200.0,
      longitude: 20.0,
    };
    const addrObj = await getAddress(pos);
    const address = `${addrObj?.locality}, ${addrObj?.city}`;

    // payload of thr fulfilled state
    return address;
  }
);

const initialState = {
  username: "",
  status: "idle",
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => (state.staus = "loading"))
      .addCase(fetchAddress.fulfilled, (state) => {
        state.address = state.payload;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "Error";
        state.error = action.error.message;
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
