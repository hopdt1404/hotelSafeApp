import { createSlice } from "@reduxjs/toolkit";
import { KeyDeleteAll, KeyEnterCode, PasscodeLength } from "../enum/common";
import { RootState } from "../app/store";

// Define a type for the slice state

/*  props

+ CurrentCode
+ savedPasscode
*/
interface BoxState {
    passcode: string,
    savedPasscode: string,
    isBoxLocked: boolean,
    message: string
}

const initialState: BoxState = {
    passcode: '',
    savedPasscode: '',
    isBoxLocked: false,
    message: ''
}

export const boxSlice = createSlice({
    name: 'box',
    initialState,
    reducers: {
        setPasscode: (state, action) => {
            let inputData = action.payload;
            // CRL : DeleteAll, =>:  EnterCode, else push if length < 4
            if (inputData === KeyDeleteAll) {
                state.passcode = '';
                state.message = '';
            } else if (inputData === KeyEnterCode) {
                if (state.passcode.length === PasscodeLength) {
                    if (!state.isBoxLocked) {
                        // Set new savedPasscode
                        state.savedPasscode = state.passcode;
                        state.isBoxLocked = true;
                        state.passcode = '';
                        state.message = 'Passcode set successfully.';
                    } else {
                        if (state.passcode === state.savedPasscode) {
                            state.isBoxLocked = false;
                            state.message = 'Passcode unlocked successfully.'
                            state.passcode = '';
                            state.savedPasscode = '';
                        } else {
                            state.message = 'Passcode invalid. Please try again.'
                        }
                    }
                } else {
                    state.message = 'Passcode invalid. Please try again.';
                }
            } else if (state.passcode.length < PasscodeLength) {
                state.passcode += inputData;
                state.message = '';
            }
        }
    },
});

export const { setPasscode } = boxSlice.actions;

export const selectBox = (state: RootState) => state.box;
export default boxSlice.reducer;