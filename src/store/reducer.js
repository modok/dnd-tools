import * as actionTypes from "./actionTypes";
import players from './playersState';
import creatures from './creaturesState';

const initialState = {
    players,
    contenders: [],
    creatures,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLEAR:
            return {
                ...state,
                contenders: [],
            };
        case actionTypes.ADD_CONTENDER:
            return {
                ...state,
                contenders: [...state.contenders, action.contender],
            };
        case actionTypes.ADD_ROSTER:
            const players = state.players.map(p => {
                return {
                    ...p,
                    initiative: action.players[p.name].initiative,
                };
            });
            return {
                ...state,
                contenders: [...state.contenders,...players],
            };
        case actionTypes.CHANGE_CONTENDER_HP:
            const contender = action.contender;
            const updateContenders = state.contenders.map(c => {
                if (c.id === contender.id) {
                    return { ...c, hp: contender.hp };
                }
                return c;
            });
            return {
                ...state,
                contenders: [...updateContenders],
            };
        default:
            return state;
    }
};

export default reducer;
