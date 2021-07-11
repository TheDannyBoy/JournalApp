import { types } from "../types/types";

const initialState = {
    loading: false,
    messageError: null,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                messageError: action.payload,
            }
        case types.uiRemoveError:
            return {
                ...state,
                messageError: null,
            }
        case types.uiStartLoading:
        case types.uiFinishLoading:
            return {
                ...state,
                loading: action.payload.loading,
            }
        default:
            return state;
    }
};
