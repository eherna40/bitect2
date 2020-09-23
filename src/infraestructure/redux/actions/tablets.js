import { GET_ALL_TABLETS, GET_ALL_TABLETS_FAILED, GET_ALL_TABLETS_SUCCESS } from "../constants/tablet"


export const actionGetTablets = () => ({ type: GET_ALL_TABLETS })
export const actionGetTabletsSuccess = (tablets) => ({ type: GET_ALL_TABLETS_SUCCESS, tablets })
export const actionGetTabletsFailed = () => ({ type: GET_ALL_TABLETS_FAILED })

