import * as Actions from '../actions/applicationActions.js';

export default function(state = {}, action = {type: Actions.UNKNOWN}){

    const { payload } = action;

    switch (action.type){

        case Actions.SET_APPLICATION_STATE:
            return Object.assign({}, state, payload.state);

        default:
            return state;

    }

}
