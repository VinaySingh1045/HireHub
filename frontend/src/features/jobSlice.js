import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        singleJob: null,
        searchJob: "",
        filterJob: "",
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setSearchJob: (state, action) => {
            state.searchJob = action.payload;
        },
        setFilterJob: (state, action) => {
            state.filterJob = action.payload;
        }
    }
})

export const { setAllJobs, setSingleJob, setSearchJob, setFilterJob } = jobSlice.actions;
export default jobSlice.reducer;
