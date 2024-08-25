import { createSlice } from "@reduxjs/toolkit";

const applicantSlice = createSlice({
    name: "applicant",
    initialState: {
        AllApplicants: [],
        singleApplicant: null
    },
    reducers: {
        setAllApplicants: (state, action) => {
            state.AllApplicants = action.payload;
        },
        setSingleApplicant: (state, action) => {
            state.singleApplicant = action.payload;
        }
    }
});

export const { setAllApplicants, setSingleApplicant } = applicantSlice.actions;
export default applicantSlice.reducer;
