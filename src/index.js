import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router/lib';
import registerServiceWorker from './registerServiceWorker';
import Public from './screens/index';

ReactDOM.render(

    <Router history={browserHistory}> 
        <Route path='/'>
            <IndexRoute component={Public.Home}/>
        </Route>
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
