import { LOAD } from "../constants/load"

const initialState = {
    loading: false,
    error: false
}


const loadReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOAD:
            return {
                ...state,
                loading: true,
                error: false
            }

        default:
            return state
    }
}

export default loadReducer