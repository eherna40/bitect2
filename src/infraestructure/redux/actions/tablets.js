import { GET_ALL_TABLETS, GET_ALL_TABLETS_FAILED, GET_ALL_TABLETS_SUCCESS, ON_SELECT_TABLET, ON_SELECT_TABLET_FAILED, ON_SELECT_TABLET_SUCCESS } from "../constants/tablet"


export const actionGetTablets = () => ({ type: GET_ALL_TABLETS })
export const actionGetTabletsSuccess = (tablets) => ({ type: GET_ALL_TABLETS_SUCCESS, tablets })
export const actionGetTabletsFailed = () => ({ type: GET_ALL_TABLETS_FAILED })

export const actionOnSelectTablet = (id) => ({ type: ON_SELECT_TABLET, id })
export const actionOnSelectTabletSuccess = (tablet) => ({ type: ON_SELECT_TABLET_SUCCESS, tablet })
export const actionOnSelectTabletFailed = () => ({ type: ON_SELECT_TABLET_FAILED })