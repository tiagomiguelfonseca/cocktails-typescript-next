import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Events } from "./types";
import { RootState } from "../../app/store";

// This was my second aproach but I didn't go thought

export const fetchLeagueByName = createAsyncThunk<Event, string>(
  "league/fetchByName",
  async (name, { rejectWithValue }) => {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=${name}`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data.event;
  }
);

type RequestState = "pending" | "fulfilled" | "rejected";

export const leagueSlice = createSlice({
  name: "league",
  initialState: {
    dataByName: {} as Record<string, Event | undefined>,
    statusByName: {} as Record<string, RequestState | undefined>
  },
  reducers: {},
  extraReducers: (builder) => {
    // When our request is pending:
    // - store the 'pending' state as the status for the corresponding league name
    builder.addCase(fetchLeagueByName.pending, (state, action) => {
      state.statusByName[action.meta.arg] = "pending";
    });
    // When our request is fulfilled:
    // - store the 'fulfilled' state as the status for the corresponding league name
    // - and store the received payload as the data for the corresponding league name
    builder.addCase(fetchLeagueByName.fulfilled, (state, action) => {
      state.statusByName[action.meta.arg] = "fulfilled";
      state.dataByName[action.meta.arg] = action.payload;
    });
    // When our request is rejected:
    // - store the 'rejected' state as the status for the corresponding league name
    builder.addCase(fetchLeagueByName.rejected, (state, action) => {
      state.statusByName[action.meta.arg] = "rejected";
    });
  }
});

export const selectStatusByName = (state: RootState, name: string) =>
  state.league.statusByName[name];
export const selectDataByName = (state: RootState, name: string) =>
  state.league.dataByName[name];
