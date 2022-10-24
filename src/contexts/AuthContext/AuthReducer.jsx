export const actionTypes = {
    logIn: "logIn",
    logOut: "logOut",
    signUp: "signUp",

}


export default function AuthReducer(state, action) {
    switch (action.type) {

        case actionTypes.logIn: {
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.username,
                token: action.payload.token
            };
        }
        case actionTypes.logOut: {
            return {
                isLoggedIn: false,
                username: null,
                token: null,
            };
        }
        case actionTypes.signUp: {
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.username,
                token: action.payload.token
            };
        }

        default: {
            return state;
        }
    }
};
