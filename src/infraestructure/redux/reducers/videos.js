import { LOAD } from "../constants/load"
import { DOWNLOAD_VIDEOS } from "../constants/videos"

const initialState = {
    loading: false,
    error: false,
    videos: []
}


const videosReducer = (state = initialState, action) => {

    switch (action.type) {

        case DOWNLOAD_VIDEOS:
            return {
                ...state,
                loading: true,
                error: false,
                videos: []
            }

        default:
            return state
    }
}

export default videosReducer