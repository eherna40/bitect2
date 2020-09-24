import { LOAD } from "../constants/load"
import { GET_ALL_TABLETS, GET_ALL_TABLETS_FAILED, GET_ALL_TABLETS_SUCCESS, ON_SELECT_TABLET, ON_SELECT_TABLET_FAILED, ON_SELECT_TABLET_SUCCESS } from "../constants/tablet"

const initialState = {
    loading: false,
    error: false,
    tablets: [],
    tablet: {}
}


const tabletReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_TABLETS:
            return {
                ...state,
                loading: true,
                error: false,
                tablets: []
            }
        case GET_ALL_TABLETS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                tablets: []
            }
        case GET_ALL_TABLETS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                tablets: action.tablets
            }

            case ON_SELECT_TABLET:
                return {
                    ...state,
                    loading: true,
                    error: false,
                }
            case ON_SELECT_TABLET_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: true,
                }
            case ON_SELECT_TABLET_FAILED:
                return {
                    ...state,
                    loading: false,
                    error: false,
                }
        default:
            return state
    }
}

export default tabletReducer