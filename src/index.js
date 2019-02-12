import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import {Provider} from "react-redux";
import store from "./store/createStore";
import axios from "./dal/axios-instance";
import {actions as actionsAuth} from "./redux/modules/authRedux";



axios.get('auth/me').then(result => {
        if (result.data.resultCode === 0) {
            store.dispatch(actionsAuth.setUserAuthData(result.data.data.id, result.data.data.login, result.data.data.email));
        }
        // else {
        //     store.dispatch(actionsAuth.clearUserAuthData())
        // }
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
    });




// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById('root'));
//---
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
//-- end
















