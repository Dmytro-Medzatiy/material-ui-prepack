export const UNKNOWN = 'UNKNOWN';
export const SET_APPLICATION_STATE = 'SET_APPLICATION_STATE';

export function setApplicationState(state){
    return {
        type: SET_APPLICATION_STATE,
        payload: { state: state }
    }
}
