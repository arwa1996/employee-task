import {
  createSlice,
  isPending,
  isRejected,
  isFulfilled,
} from '@reduxjs/toolkit';
import { openNotification } from '../../util/notification/Notification';

type CommonState = {
  error: string | undefined;
  loading: boolean;
};

const initialState: CommonState = {
  error: '',
  loading: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        let message;
        message = action.error.message;
        openNotification(`${message}`, 'error');
        state.error = message;
      })
      .addMatcher(isFulfilled, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

export default commonSlice.reducer;
