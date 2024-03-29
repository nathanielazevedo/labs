import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../tools/store';

export interface CounterState {
  mode: string | undefined;
  myLab: any;
  outLab: any;
}

const initialState: CounterState = {
  mode: undefined,
  myLab: undefined,
  outLab: undefined,
};

export const getLab = createAsyncThunk('labs/fetchLab', async (id: string) => {
  const response = await fetch(
    `https://adventurous-teddy-cow.cyclic.app/lab/${id}`,
    {
      method: 'GET',
    }
  );
  const lab = await response.json();
  return lab;
});

export const getOutLab = createAsyncThunk(
  'labs/fetchOutLab',
  async (id: string) => {
    const response = await fetch(
      `https://adventurous-teddy-cow.cyclic.app/lab/${id}`,
      {
        method: 'GET',
      }
    );
    const lab = await response.json();
    return lab;
  }
);

export const updateLabBasicInfo = createAsyncThunk(
  'labs/updateLab',
  async (formData: any) => {
    const response = await fetch(
      `https://adventurous-teddy-cow.cyclic.app/lab/${formData.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.formData),
      }
    );
    const lab = await response.json();
    return lab;
  }
);

export const addMember = createAsyncThunk(
  'labs/addMember',
  async (formData: any) => {
    const response = await fetch(
      `https://adventurous-teddy-cow.cyclic.app/lab/member/${formData.id}`,
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

export const deleteMember = createAsyncThunk(
  'labs/deleteMember',
  async (formData: any) => {
    const response = await fetch(
      `https://adventurous-teddy-cow.cyclic.app/lab/member/${formData.memberId}/${formData.labId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
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
    setLab: (state, action: PayloadAction<any>) => {
      state.myLab = action.payload;
    },
    setMode: (state) => {
      localStorage.setItem('mode', state.mode === 'light' ? 'dark' : 'light');
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setModeInitial: (state, action: any) => {
      localStorage.setItem('mode', action.payload);
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLab.pending, (state) => {
        state.myLab = undefined;
      })
      .addCase(getLab.fulfilled, (state, action) => {
        state.myLab = action.payload;
      })
      .addCase(getLab.rejected, (state) => {
        state.myLab = undefined;
      })
      .addCase(getOutLab.pending, (state) => {
        state.outLab = undefined;
      })
      .addCase(getOutLab.fulfilled, (state, action) => {
        state.outLab = action.payload;
      })
      .addCase(getOutLab.rejected, (state) => {
        state.outLab = undefined;
      })
      .addCase(addMember.pending, (state) => {})
      .addCase(addMember.fulfilled, (state, action) => {
        state.myLab.members = [...state.myLab.members, action.payload];
      })
      .addCase(addMember.rejected, (state) => {})
      .addCase(updateLabBasicInfo.pending, (state) => {})
      .addCase(updateLabBasicInfo.fulfilled, (state, action) => {
        state.myLab = action.payload;
      })
      .addCase(updateLabBasicInfo.rejected, (state) => {})
      .addCase(deleteMember.pending, (state) => {})
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.myLab = action.payload;
      })
      .addCase(deleteMember.rejected, (state) => {});
  },
});

export const { setLab, setMode, setModeInitial } = labSlice.actions;

export const selectlab = (state: RootState) => state.lab;

export default labSlice.reducer;
