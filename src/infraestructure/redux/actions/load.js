import { LOAD, LOAD_FAILED, LOAD_SUCCESS } from "../constants/load"


export const actionLoad = () => ({ type: LOAD })
export const actionLoadSuccess = () => ({ type: LOAD_SUCCESS, })
export const actionLoadFailed = () => ({ type: LOAD_FAILED })
