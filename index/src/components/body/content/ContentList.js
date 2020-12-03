import React, { Component } from "react";
import "./content.css";
import {connect} from 'react-redux';
import {fetchThoughts,followUser} from '../../../actions/index';
import {Link} from 'react-router-dom';


class ContextBox extends Component{

  componentDidMount(){
    this.props.fetchThoughts();
  }

  renderButton(el){
    if(this.props.userId=== el.userId && this.props.isSignedIn){
      return(
        <React.Fragment>
          <Link to={`/thoughts/edit/${el.id}`} className="ui primary button">
                 Edit
              </Link>
              <Link to={`/thoughts/delete/${el.id}`} className="ui negative button">
               Delete
                </Link>
                </React.Fragment>
        
      )
    }
      if(this.props.isSignedIn && this.props.hasFollowed===false){
        return(
          <button onClick={this.renderFollow} className="ui primary button">
          <i class="plus circle icon "></i> Follow
        </button>
        )}
        if(this.props.isSignedIn && this.props.hasFollowed===true){return(
          <button class="ui disabled button">
                <i class="user icon"></i>
                  Followed
                    </button>
        )}
  }

  renderFollow=()=>{
    this.props.followUser();
  }

renderList(){
  return this.props.thoughts.map(el=>{
    return(
      
      <div className="content-box" key={Math.floor(Math.random() * 10000000)}>
          <div className="content-head">
            <div className="content-details">
             <div className="username" style={{ fontSize: "20px" }}>
              <i className="user circle icon huge"></i>
                {el.profile}
              </div>
             <div className="username-id">{`@${el.profile}${el.userId.substring(0,el.userId.length-18)}`}</div>
            </div>
            <div>
              {this.renderButton(el)}
            </div>
          </div>
          <div className="content-body">
            <p style={{fontSize:'18px'}}>
            &#10077;{el.thought}&#10078;
            </p>
          </div>
        </div>
        
    )
  }).reverse();
}




    render(){
        return(
            <React.Fragment >
            {this.renderList()}
        </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    thoughts: Object.values(state.thoughts),
    userId: state.auth.userId,
    userName: state.auth.profile,
    isSignedIn : state.auth.isSignedIn,
    hasFollowed: state.follow.hasFollowed
  }
}


export default connect(mapStateToProps,{fetchThoughts,followUser})(ContextBox);