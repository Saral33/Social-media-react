import React, { Component } from 'react';
import Modal from '../../modal';
import {connect} from 'react-redux';
import {fetchThought,editThought} from '../../../actions/index';
import {Link} from 'react-router-dom';


class EditContent extends Component{

    state={
        Description: this.props.thoughts.thought
    }
  
    componentDidMount(){
        this.props.fetchThought(this.props.match.params.id);
    }

    renderContent(){
        if(this.props.thoughts){
        return (
           <div class="ui fluid icon input">
            <input type="text" value={this.state.Description} onChange={(e)=>this.setState({Description:e.target.value})}/>
        </div>
        )}
        }
        SubmitThoughts=()=>{
            this.props.editThought(this.props.match.params.id,this.state.Description)
        }

       renderButton(){
           return(
               <>
               <button onClick={this.SubmitThoughts} className="ui primary button">Edit</button>
                 <Link to='/' className="ui button">Cancel</Link>
               </>
           )
       } 

      
      render() {
        
        return (
            <div>
               <Modal
               header='Edit'
               content={this.renderContent()}
                buttons={this.renderButton()}
               />
            </div>
        )
    }
}

const MapStateToProps=(state,ownProps)=>{
    return{
        thoughts: state.thoughts[ownProps.match.params.id]
    }
}
export default connect(MapStateToProps,{fetchThought,editThought})(EditContent);