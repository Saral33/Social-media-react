import React, { Component } from 'react';
import Modal from '../../modal';
import {connect} from 'react-redux';
import {fetchThought, deleteThought} from '../../../actions/index';
import {Link} from 'react-router-dom';

        
class DeleteContent extends Component {
    componentDidMount(){
        this.props.fetchThought(this.props.match.params.id);
    }
    
    displayButtons(){
        return(
        <div>
            <button onClick={()=>this.props.deleteThought(this.props.match.params.id)} className="ui negative button">Delete</button>
            <Link to='/' className="ui button">Cancel</Link>
        </div>)
        
    }
render(){
    return (
        <Modal header="Delete"
        content= "Are you sure want to delete your valuable thought?"
        buttons={this.displayButtons()}
        />
        
    )
}
}

const mapStateToProps=(state,ownProps)=>{
    return{
        currentThought: state.thoughts[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps,{fetchThought,deleteThought})(DeleteContent);
