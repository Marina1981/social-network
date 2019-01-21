import {applyMiddleware, createStore} from "redux";
import rootReducer from "../redux/reducer";
import {actions} from "../redux/modules/profileRedux";
import thunk from "redux-thunk";



const store = createStore(
    rootReducer,
    applyMiddleware(thunk));



let start = ()=>{
    store.dispatch(actions.setUserpicURL('https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif'));
    store.dispatch(actions.setUserName('Orange'));
    store.dispatch(actions.setUserBirthDate('10.10.2000г.'));
    store.dispatch(actions.setUserCity('Минск'));
    store.dispatch(actions.setUserEducation('БГУ 2011'));
    store.dispatch(actions.setUserWebSite('http://it-kamasutra.com'));
};
start();

export default store;




