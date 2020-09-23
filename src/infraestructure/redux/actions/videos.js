import { DOWNLOAD_VIDEOS, DOWNLOAD_VIDEOS_SUCCESS, DOWNLOAD_VIDEOS_FAILED } from "../constants/videos"


export const actionDownloadVideos = () => ({ type: DOWNLOAD_VIDEOS })
export const actionDownloadVideosSuccess = () => ({ type: DOWNLOAD_VIDEOS_SUCCESS, })
export const actionDownloadVideosFailed = () => ({ type: DOWNLOAD_VIDEOS_FAILED })

