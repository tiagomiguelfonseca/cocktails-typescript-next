import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { livescoresApi } from '../features/livescores/api';
import { leagueSlice } from 'src/features/livescores/leagueSlice';

export const store = configureStore({
  reducer: {
    [livescoresApi.reducerPath]: livescoresApi.reducer,
    league: leagueSlice.reducer,

  },
  middleware: (gDM) => gDM().concat(livescoresApi.middleware)
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;