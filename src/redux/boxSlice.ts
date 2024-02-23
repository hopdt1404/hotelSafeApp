import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

/*  props

+ CurrentCode
+ savedPasscode
*/
interface BoxState {
    passcode: string,
    savedPasscode: string,
}

const initialState: BoxState = {
    passcode: '',
    savedPasscode: '423'
}

export const boxSlice = createSlice({
    name: 'box',
    initialState,
    reducers: {}
});