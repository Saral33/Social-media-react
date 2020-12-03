import React, { Component } from "react";
import "./content.css";
import {connect} from 'react-redux';
import ContentBox from './ContentList';
import {createThought} from '../../../actions/index';

class Content extends Component {
 textInput= React.createRef();


  submitThoughts=()=>{
  this.props.createThought(this.textInput.current.value);
  this.textInput.current.value='';
  }

renderPage(){
if(this.props.isSignedIn){
    return(
        <div className="tweet-box">
                <div className="tweet-user">
                    <div> <i className="user circle icon huge"></i></div>
                    <textarea className="tweet-area" ref={this.textInput}  placeholder="What's your valuable thought?"/>
                     
                </div>
                <div onClick={this.submitThoughts} className="ui right floated primary button" style={{marginTop:'10px'}}>Submit</div>
               </div>
    )
}
}
 render() {
    return (
      <div className="contents">
          {this.renderPage()}
          <ContentBox/>
     </div>
    );
  }
}

const mapstateToProps=(state)=>{
    return{
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapstateToProps,{createThought})(Content);
