import React from 'react';
import Header from './components/header/header';
import MainBody from './components/body/main/mainBody';
import {Router,Route,Switch} from 'react-router-dom';
import history from './components/history';
import DeleteContent from './components/body/content/DeleteContent';
import EditContent from './components/body/content/EditContent';


function App() {
    return (
        <div>
            <Router history={history}>
        <Header/>
        
        <Switch>
           <Route path='/' exact component={MainBody} />
           <Route path= '/thoughts/delete/:id' exact component={DeleteContent}/>
           <Route path= '/thoughts/edit/:id' exact component={EditContent}/>
        </Switch>
           
</Router>
        
        </div>
    )
}

export default App

