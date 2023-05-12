import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../tools/store';

export interface CounterState {
  lab: any;
}

const initialState: CounterState = {
  lab: undefined,
};

export const getLab = createAsyncThunk('labs/fetchLab', async (id: string) => {
  const response = await fetch(`http://localhost:6001/lab/${id}`, {
    method: 'GET',
  });
  const lab = await response.json();
  return lab;
});

export const updateLabBasicInfo = createAsyncThunk(
  'labs/updateLab',
  async (formData: any) => {
    const response = await fetch(`http://localhost:6001/lab/${formData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.formData),
    });
    const lab = await response.json();
    return lab;
  }
);

export const addMember = createAsyncThunk(
  'labs/addMember',
  async (formData: any) => {
    const response = await fetch(
      `http://localhost:6001/lab/member/${formData.id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.formData),
      }
    );
    const newMembers = await response.json();
    return newMembers;
  }
);

export const labSlice = createSlice({
  name: 'lab',
  initialState,
  reducers: {
    setLab: (state, action: PayloadAction<number>) => {
      state.lab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLab.pending, (state) => {
        state.lab = undefined;
      })
      .addCase(getLab.fulfilled, (state, action) => {
        state.lab = action.payload;
      })
      .addCase(getLab.rejected, (state) => {
        state.lab = undefined;
      })
      .addCase(addMember.pending, (state) => {})
      .addCase(addMember.fulfilled, (state, action) => {
        state.lab.members = [...state.lab.members, action.payload];
      })
      .addCase(addMember.rejected, (state) => {})
      .addCase(updateLabBasicInfo.pending, (state) => {})
      .addCase(updateLabBasicInfo.fulfilled, (state, action) => {
        state.lab = action.payload;
      })
      .addCase(updateLabBasicInfo.rejected, (state) => {});
  },
});

export const { setLab } = labSlice.actions;

export const selectlab = (state: RootState) => state.lab;

export default labSlice.reducer;
