import * as actionTypes from "./actionTypes";

const initialState = {
    players: [
        { name: "Uramaki", ac: 19, hp: 49 },
        { name: "Jhonny", ac: 13, hp: 40 },
        { name: "Talia", ac: 17, hp: 43 },
        { name: "Airin", ac: 17, hp: 55 },
        { name: "Zoltan", ac: 18, hp: 64 },
        { name: "Jade", ac: 16, hp: 55 },
        { name: "Raphael", ac: 18, hp: 51 },
    ],
    contenders: [],
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
                contenders: [...players],
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
