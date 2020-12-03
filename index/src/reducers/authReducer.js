const initialState= {
    isSignedIn: null
}
export default (state=initialState,action)=>{
switch(action.type){
    case 'SIGN_IN':
        return{...state, isSignedIn: true,userId: action.userId, profile:action.profile}

    case 'SIGN_OUT':
        return{...state, isSignedIn: false }

        default: return state;
}
}

