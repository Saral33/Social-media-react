import thoughts from './base';
import history from '../components/history'

export const followUser= ()=>{
    return{
        type:'FOLLOW_USER'
    }
}

export const signIn=(userId,userProfile)=>{
return{
    type:'SIGN_IN',
   userId:userId,
   profile:userProfile
};
}


export const signOut = ()=>{
    return{
        type:'SIGN_OUT'
    }
}

export const fetchThought=(id)=> async dispatch =>{
    const response= await thoughts.get(`/thoughts/${id}`);
    dispatch({
        type:'FETCH_THOUGHT',
        payload: response.data
    })
}

export const fetchThoughts = ()=>async dispatch =>{
    const response = await thoughts.get('/thoughts');

    dispatch({
        type:'FETCH_THOUGHTS',
        payload: response.data
    })
}

export const createThought = (thought)=> async(dispatch,getState)=>{
    const {userId,profile}= getState().auth;
    const response = await thoughts.post('/thoughts',{thought,userId,profile});
   
    dispatch({
        type:'CREATE_THOUGHT',
        payload: response.data
    })

}

export const deleteThought= (id)=> async(dispatch)=>{

    await thoughts.delete(`/thoughts/${id}`);
    dispatch({
        type:'DELETE_THOUGHT',
        payload:id
    })
    history.push('/');
}

export const editThought= (id,thought)=> async(dispatch)=>{
    const response= await thoughts.patch(`/thoughts/${id}`,{ thought});
    dispatch({
        type:'EDIT_THOUGHT',
        payload: response.data
    })
    history.push('/');
}


