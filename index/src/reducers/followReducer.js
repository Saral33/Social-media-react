

const INITIAL_STATE={
    hasFollowed: false,
    followers:0
}

export default (state=INITIAL_STATE,action)=>{
    if(action.type='FOLLOW_USER'){
        return{...state, hasFollowed:!state.hasFollowed,followers:state.followers+1};
}
return{state}

};