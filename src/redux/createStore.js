import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducer";
import {types} from "./modules/profileRedux";
import thunk from "redux-thunk";



const store = createStore(
    rootReducer,
    applyMiddleware(thunk));



let start = ()=>{

    store.dispatch({
        type:    types.SET_USERPIC_URL,
        urlImg:  'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif'
    });
    store.dispatch({
        type:      types.SET_USER_NAME,
        userName:  'Orange'
    });

    store.dispatch({
        type:       types.SET_USER_BIRTH_DATE,
        birthDate: '10.10.2000г.'
    });
    store.dispatch({
        type:      types.SET_USER_CITY,
        userCity: 'Минск'
    });
    store.dispatch({
        type:           types.SET_USER_EDUCATION,
        userEducation: 'БГУ 2011'
    });
    store.dispatch({
        type:         types.SET_USER_WEBSITE,
        userWebSite: 'http://it-kamasutra.com'
    });

};
start();

export default store;




