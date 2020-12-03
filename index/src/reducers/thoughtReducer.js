import _ from 'lodash';


export default (state={},action)=>{
switch(action.type){

    case 'FETCH_THOUGHTS':
    return{ ...state, ..._.mapKeys(action.payload,'id')}

    case 'CREATE_THOUGHT':
        return {...state, [action.payload.id]: action.payload}

        case 'FETCH_THOUGHT':
            return {...state, [action.payload.id]: action.payload}

    case 'EDIT_THOUGHT' :
        return{...state, [action.payload.id]: action.payload} 

    case 'DELETE_THOUGHT' :
        return _.omit(state,action.payload);

        default: return state
}
      
};

    
