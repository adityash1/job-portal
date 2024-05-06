import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { applyFilters } from '../../utils/utils';

export const fetchJobs = createAsyncThunk(
    'filters/fetchJobs',
    async ({ limit, offset }, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://api.weekday.technology/adhoc/getSampleJdJSON`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ limit, offset }),
            });
            const jsonResponse = await response.json();
            if (jsonResponse && jsonResponse.jdList) {
                return jsonResponse.jdList;
            } else {
                return rejectWithValue(new Error("No more data"));
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        rawJobs: [],
        allJobs: [],
        offset: 0,
        hasMore: true,
        loading: false,
        error: null,
        filters: {}
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
            state.allJobs = applyFilters(state.rawJobs, state.filters);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.rawJobs = [...state.rawJobs, ...action.payload];
                state.allJobs = applyFilters(state.rawJobs, state.filters);
                state.offset += action.payload.length;
                state.hasMore = action.payload.length !== 0;
                state.loading = false;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;