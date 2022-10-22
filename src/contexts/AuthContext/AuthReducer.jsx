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
                user: action.payload.user,
                token: action.payload.token
            };
        }
        case actionTypes.logOut: {
            return {
                isLoggedIn: false,
            };
        }
        case actionTypes.signUp: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            };
        }

        default: {
            return state;
        }
    }
    return state;
};
