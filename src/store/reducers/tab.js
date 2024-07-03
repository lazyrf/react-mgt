import {createSlice} from '@reduxjs/toolkit';

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        isCollapse: false,
    },
    reducers: {
        collapseMenu: state => {
            state.isCollapse = !state.isCollapse;
            // 不需要返回值
        },
    }
});

export const {collapseMenu} = tabSlice.actions;
export default tabSlice.reducer;
