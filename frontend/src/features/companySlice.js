import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "company",
    initialState: {
        singleCompany: null,
        AllCompanies: [],
    },
    reducers: {
        setSingleCompany: (state, action) => {
            state.singleCompany = action.payload;
        },
        setAllCompanies: (state, action) => {
            state.AllCompanies = action.payload;
        }
    }
});

export const { setSingleCompany, setAllCompanies } = companySlice.actions;
export default companySlice.reducer;