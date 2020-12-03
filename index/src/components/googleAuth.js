import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';


class GoogleAuth extends React.Component{


    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '1078753984247-59pr209ptppfitnodfh38rfkaomb7g7b.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth= window.gapi.auth2.getAuthInstance();
               this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
               
            })
        
        });
        
    };

    onSignOutClick=()=>{
        this.auth.signOut();
    }

    onSignInClick=()=>{
        this.auth.signIn();
    }

    onAuthChange= (isSignedIn)=>{
       if(isSignedIn){
           this.props.signIn(this.auth.currentUser.get().getId(),this.auth.currentUser.get().getBasicProfile().getGivenName());
       }
       else{
           this.props.signOut();
       }
    }
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null;
        }
        else if (this.props.isSignedIn){
            return(
                
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"/>
                    Sign Out
                </button>
            
            )
        }
        else{
            return(
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon"/>
                    Sign In With Google
                </button>
            )
        }
    }
    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state)=> {
    return{
        isSignedIn: state.auth.isSignedIn
    };
}


export default 
connect(mapStateToProps, {signIn,signOut})(GoogleAuth);



    











