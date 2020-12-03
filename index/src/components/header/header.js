import React, { Component } from 'react';
import GoogleAuth from '../googleAuth';
import './header.css';
import {connect} from 'react-redux';
import Logo from '../../assest/images/Logo.png'

 class Header extends Component {
    renderProfile(){
        if(this.props.profile!==undefined && this.props.isSignedIn){
            return( 
            <React.Fragment>
             <i className="big user circle icon" style={{color:'white'}}/>
            <div className="user-profile__name">{this.props.profile}</div>
            </React.Fragment>
           )}
            if(!this.props.isSignedIn){
                    return }
        }
    


    render() {
        
        return (
            <div className="header">
               <div className="logo" >
                <img alt="Logo" src={Logo}/>
                <div className="heading"><h3>My thoughts</h3></div>
               
               </div> 
               <div className= "header__right">
               <div className="user-profile"> 
               {this.renderProfile()}
                </div>
                <GoogleAuth/>
                 </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        profile: state.auth.profile,
        isSignedIn: state.auth.isSignedIn
    }
}


export default connect(mapStateToProps)(Header)