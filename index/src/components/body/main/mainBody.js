import React, { Component } from 'react';
import SideBar from '../sidebar/Sidebar';
import './main.css';
import Content from '../content/content'


 class MainBody extends Component {
    render() {
        return (
            <div className="flex-container">
               <SideBar/> 
               <Content/>
            </div>
        )
    }
}


export default MainBody;