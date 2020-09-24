import { LOAD } from "../constants/load"
import { DOWNLOAD_VIDEOS, DOWNLOAD_VIDEOS_FAILED, DOWNLOAD_VIDEOS_SUCCESS } from "../constants/videos"

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
        case DOWNLOAD_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                videos: action.videos
            }

        case DOWNLOAD_VIDEOS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            }

        default:
            return state
    }
}

export default videosReducer