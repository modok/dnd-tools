import * as actionTypes from "./actionTypes";

const initialState = {
    contenders: [
        { name: "Airin", initiative: 10, ac: 17, hp: 55 },
        { name: "Jhonny", initiative: 30, ac: 13, hp: 40 },
        { name: "Zoltan", initiative: 8, ac: 18, hp: 64 },
        { name: "Talia", initiative: 25, ac: 17, hp: 43 },
        { name: "Raphael", initiative: 20, ac: 18, hp: 51 },
        { name: "Jade", initiative: 12, ac: 16, hp: 55 },
        { name: "Uramaki", initiative: 10, ac: 19, hp: 49 },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CONTENDER:
            return {
                ...state,
                contenders: [...state.contenders, action.contender],
            };
        default:
            return state;
    }
};

export default reducer;
