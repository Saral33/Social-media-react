import React from 'react';
import './sidebar.css';
import GoogleAuth from '../../googleAuth';
import {connect} from 'react-redux';


 const SideBar=(props) =>{
  const renderSidebar=()=>{
       if(!props.isSignedIn){
        return(
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <div style={{textAlign:'center',fontSize:'28px',marginTop:'20px'}}>Sign In</div>
                 <div style={{display:'block',textAlign:'center',marginTop:'20px'}}><GoogleAuth/></div>
                 <div style={{textAlign:'center',marginTop:'25px',fontSize:'18px',letterSpacing:'3px'}}>And Share your thoughts with the world</div>
                 </div>
           
        )}
        else{
            return(
                
                <nav className="sidebar">
                    <div className="sidebar__image-container">
                        <div className="box">
                        <i class="user circle icon big" style={{fontSize:'53px'}}></i>
            <div style={{textAlign:'center',fontSize:'20px'}}>{props.profile}</div>
                        </div>
                    </div>
                    <div className="sidebar__user">
                        <div className="user__profile-heading" style={{textAlign:'center'}}>
                        <i class="chess queen icon" style={{fontSize:'18px'}}></i>
                            User's Profile
                       </div>
                        </div>
       
                        <div className="user__profile">
                           <div className="user__profile-details">
                           <i class="user outline icon" style={{fontSize:'20px'}}></i>
                             <span>UserName : {props.profile}</span> 
                           </div>
                           <div className="user__profile-details">
                           <i class="comment outline icon" style={{fontSize:'20px'}}></i>
                           <span>Total Thoughts : 12</span> 
                           </div>
                           <div className="user__profile-details">
                           <i class="users icon" style={{fontSize:'20px'}}></i>
                           <span>Total Followers : 23</span> 
                           </div>
                           <div className="user__profile-details">
                           <i class="user plus icon" style={{fontSize:'20px'}}></i>
                             <span>Total Followed : {props.followers}</span> 
                           </div>
       
                        </div>
                       </nav> 
                       
            )
        
       }
   }

    return (
        <div className="sidebar-content">
            {renderSidebar()}
        <div className="footer" >
            
            CopyRight &#169; 2020 by My Thoughts.<br/>
             All Rights Reserved
        </div>
        </div>
    
        )
}

const mapStateToProps= (state)=>{
    
    return{
        profile: state.auth.profile,
        isSignedIn: state.auth.isSignedIn,
        followers:state.follow.followers
    }
}


export default
connect(mapStateToProps)(SideBar);
