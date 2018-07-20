import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './store'
import {verify, fetchProtected} from './actions/authorization'
import {BrowserRouter as Router} from 'react-router-dom'
import 'react-datetime/css/react-datetime.css'
import 'font-awesome/css/font-awesome.min.css'





initialize().then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    , document.getElementById('root'));
    registerServiceWorker();    
})

async function initialize () {
    const token = window.localStorage.getItem('token')
    if(token) {
        return store.dispatch(verify(token))
    }
    return
}