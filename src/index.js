import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import * as serviceWorker from './serviceWorker';


//////////////////////////////
///      CAppStateStore    ///
//////////////////////////////
class CAppStateStore
{
    //---
    _state;
    //---
    _onActionCallback;
    _reducer;
    //==========================================================
    constructor(reducer){
        this._reducer = reducer;
    }
    //----------------------------------------------------------
    subscribe = (onActionCallback)=>{
        this._onActionCallback = onActionCallback;
    };
    //----------------------------------------------------------
    getState = ()=>{
        return this._state;
    };

    //----------------------------------------------------------
    dispatch(actionObj){
        this._state = this._reducer(this._state, actionObj);

        this._onActionCallback();
    }
}
//////////////////////////////
//---
//-- begin
//---

//-- начальное состояние
const  initialAppState = {
        //----
        loginPageState: {
            model:{
                mail:     '',
                password: ''
            },
            view:{

            }
        },
        //----
        profilePageState: {
            model:{
                userInfo:{
                    userID: '',
                    userPicURL:'',
                    userName:'',
                    userBirthDate:'',
                    userCity: '',
                    userEducation: '',
                    userWebSite: ''
                },
                wall:{
                    messagesList:[]//['text1', 'text2']  -> [{text:'text1', like: 0}, {text:'text1', like: 0}]
                }
            },
            view:{
                wall: {
                    creatingMessage: ''
                }
            }
        },
        //----
        dialogsPageState: {
            model:{
                friendsList: [
                    {
                      friendId: '1',
                      friendUserPicURL: 'https://img0.liveinternet.ru/images/attach/c/10/110/384/110384324_5a__5_.png',
                      friendName: 'Vera'
                    },
                    {
                      friendId: '2',
                      friendUserPicURL: 'https://img1.liveinternet.ru/images/attach/c/10/110/384/110384517_5a__2_.png',
                      friendName: 'Dima'
                    }
                ],
                friendsChatLog: new Map( [
                    ['1', [{userMessageId: '5',
                            userPicURL: 'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif' ,
                            userName: 'Orange',
                            text: 'Hi',
                            time:'22:00'}]],
                    ['2', []]
                ])                               //[ { text: '', time: ''} ]
            },
            view:{
                selectedFriendId: null,
                creatingMessage: ''
            },

        }
        //----
    };

//--- редюьсер приложения
// Имена (типы) действий:

const ActionTypes = {
    resetApp :                                            'RESET_APP_ACTION',
    setProfilePageState_Model_UserPicURL:                 'SET-PROFILE-PAGE-STATE-MODEL-USERPIC-URL',
    setProfilePageState_Model_UserName:                   'SET-PROFILE-PAGE-STATE-MODEL-USER=NAME',
    setProfilePageState_Model_UserBirthDate:              'SET-PROFILE-PAGE-STATE-MODEL-USER-BIRTH-DATE',
    setProfilePageState_Model_UserCity:                   'SET-PROFILE-PAGE-STATE-MODEL-USER-CITY',
    setProfilePageState_Model_UserEducation:              'SET-PROFILE-PAGE-STATE-MODEL-USER-EDUCATION',
    setProfilePageState_Model_UserWebSite:                'SET-PROFILE-PAGE-STATE-MODEL-USER-WEBSITE',
    setProfilePageState_Model_AddMessage:                 'SET-PROFILE-PAGE-STATE-MODEL-ADD-MESSAGE',
    setProfilePageState_View_CreatingMessage:             'SET-PROFILE-PAGE-STATE-VIEW-CREATING-MESSAGE',
    incrementProfilePageState_Model_MessageLikeCount:     'INCREMENT-PROFILE-PAGE-STATE-MODEL-MESSAGE-LIKE-COUNT',

    setDialogsPageState_View_SelectedFriend:              'SET-DIALOGS-PAGE-STATE-VIEW-SELECTED-FRIEND-ID',
    setDialogsPage_View_CreatingMessage:                  'SET-DIALOGS-PAGE-VIEW-CREATING-MESSAGE',
    addDialogPageState_Model_UserMessage:                 'ADD-DIALOGS-PAGE-STATE-MODEL-USER-MESSAGE'

};
//
//

const appReducer = (appState, actionObj) => {
    if(actionObj.type === ActionTypes.resetApp){
        return initialAppState;
    }
    else if(actionObj.type === ActionTypes.setProfilePageState_Model_UserPicURL){
        let newAppState = {...appState};
        newAppState.profilePageState.model.userInfo.userPicURL = actionObj.urlImg;
        return newAppState;
    }
    else if(actionObj.type === ActionTypes.setProfilePageState_Model_UserName) {
        let newAppState = {...appState};
        newAppState.profilePageState.model.userInfo.userName = actionObj.userName;
        return newAppState;
    }
    else if(actionObj.type === ActionTypes.setProfilePageState_Model_UserBirthDate){
        let newAppState = {...appState};
        newAppState.profilePageState.model.userInfo.userBirthDate = actionObj.birthDate;
        return newAppState;
    }
    else if(actionObj.type === ActionTypes.setProfilePageState_Model_UserCity){
         let newAppState = {...appState};
         newAppState.profilePageState.model.userInfo.userCity = actionObj.userCity;
         return newAppState;
     }
    else if(actionObj.type === ActionTypes.setProfilePageState_Model_UserEducation){
        let newAppState = {...appState};
        newAppState.profilePageState.model.userInfo.userEducation = actionObj.userEducation;
        return newAppState;
    }
    else if(actionObj.type === ActionTypes.setProfilePageState_Model_UserWebSite){
        let newAppState = {...appState};
        newAppState.profilePageState.model.userInfo.userWebSite = actionObj.userWebSite;
        return newAppState;
    }
    else if(actionObj.type === ActionTypes.setProfilePageState_Model_AddMessage){
        let newAppState = {...appState};
        newAppState.profilePageState.model.wall.messagesList=[...newAppState.profilePageState.model.wall.messagesList,
                                                             {text: actionObj.message, likeCount: 0, messageId: actionObj.messageId}];
        return newAppState;
    }
    else if(actionObj.type === ActionTypes.setProfilePageState_View_CreatingMessage){
        let newAppState = {...appState};
        newAppState.profilePageState.view.wall.creatingMessage =  actionObj.message;
        return newAppState;
    }
    else if(actionObj.type === ActionTypes.incrementProfilePageState_Model_MessageLikeCount){
        let newAppState = {...appState};
        let filteredMessages =  newAppState.profilePageState.model.wall.messagesList.filter( (el) =>{return actionObj.messageId === el.messageId ? true : false;});
           filteredMessages[0].likeCount += 1;

        return newAppState;
    }


    else if(actionObj.type === ActionTypes.setDialogsPageState_View_SelectedFriend){
        let newAppState = {...appState};
        newAppState.dialogsPageState.view.selectedFriendId = actionObj.friendId;
        return newAppState;
    }
    else if(actionObj.type === ActionTypes.setDialogsPage_View_CreatingMessage){
        let newAppState = {...appState};
        newAppState.dialogsPageState.view.creatingMessage = actionObj.message;
        return newAppState;
    }
    else if(actionObj.type === ActionTypes.addDialogPageState_Model_UserMessage){
        let newAppState = {...appState};
        let oldChatMessageList = newAppState.dialogsPageState.model.friendsChatLog.get(actionObj.friendId);
             if (oldChatMessageList !== undefined) {
                 let newChatMessageList  = [...oldChatMessageList, {userMessageId: actionObj.userMessageId,
                                                                    userPicURL:    actionObj.userPicURL,
                                                                    userName:      actionObj.userName,
                                                                    text:          actionObj.userMessage,
                                                                    time:          actionObj.messageTime}];//userName: name

                 newAppState.dialogsPageState.model.friendsChatLog.set(actionObj.friendId, newChatMessageList);

             }
        return newAppState;
    }

    //возвращаем предыдущую версию состояния (state) в default ветке.
    // Очень важно возвращать предыдущую версию состояния (state) для любого неизвестного/необрабатываемого действия (action).
    return appState;
};
//---

let  appStateStore = new CAppStateStore(appReducer); // создается объект хранилища состояния приложения класса  CAppStateStore
                                                     // и ссылка на него заносится в переменную appStateStore
//---
let rerenderAppVDOM = ()=>{
    const state = appStateStore.getState();

    //----
    let profilePageAttrsVal = {
          profile:{
              userInfo: {
                  userID:         state.profilePageState.model.userInfo.userID,
                  userPicURL:     state.profilePageState.model.userInfo.userPicURL,
                  userName:       state.profilePageState.model.userInfo.userName,
                  userBirthDate:  state.profilePageState.model.userInfo.userBirthDate,
                  userCity:       state.profilePageState.model.userInfo.userCity,
                  userEducation:  state.profilePageState.model.userInfo.userEducation,
                  userWebSite:    state.profilePageState.model.userInfo.userWebSite
              },
              wall:  {
                  messagesList:    state.profilePageState.model.wall.messagesList,
                  creatingMessage: state.profilePageState.view.wall.creatingMessage,

                  onCreatingMessageChanged: (message)=>{
                      const actionObj = {
                          type: ActionTypes.setProfilePageState_View_CreatingMessage,
                          message: message
                      };
                      appStateStore.dispatch(actionObj);
                  },
                  onCreatingMessageFinishCommitted: (messageId)=>{
                      const actionObj_1 = {
                          type: ActionTypes.setProfilePageState_Model_AddMessage,
                          message: state.profilePageState.view.wall.creatingMessage,
                          messageId: messageId
                      };
                      appStateStore.dispatch(actionObj_1);

                      const actionObj_2 = {
                          type: ActionTypes.setProfilePageState_View_CreatingMessage,
                          message: ''
                      };
                      appStateStore.dispatch(actionObj_2);
                  },
                  onMesaageLikeIncrementRequest: (messageId)=>{
                      const actionObj = {
                          type: ActionTypes.incrementProfilePageState_Model_MessageLikeCount,
                          messageId: messageId
                      };
                      appStateStore.dispatch(actionObj);
                  }

              }
          }
    };
    //----
    let dialogsPageAttrsVal = {
        dialogs: {
            friendUserPicURL: state.dialogsPageState.model.friendUserPicURL,
            friendsList:      state.dialogsPageState.model.friendsList,
            friendsChatLog:   state.dialogsPageState.model.friendsChatLog,
            selectedFriendId: state.dialogsPageState.view.selectedFriendId,
            creatingMessage:  state.dialogsPageState.view.creatingMessage,


            onFriendSelected: (friendId) => {
                const actionObj = {
                    type: ActionTypes.setDialogsPageState_View_SelectedFriend,
                    friendId: friendId
                };
                appStateStore.dispatch(actionObj);
            },
            onCreatingMessageChanged: (message)=>{
                const actionObj = {
                    type: ActionTypes.setDialogsPage_View_CreatingMessage,
                    message: message
                };
                appStateStore.dispatch(actionObj);
            },
            onCreatingMessageFinishCommitted: (messageId,messageFinishCommittedTime)=>{
                const actionObj_1 = {
                    type: ActionTypes.addDialogPageState_Model_UserMessage,
                    userMessage: state.dialogsPageState.view.creatingMessage,
                    messageTime: messageFinishCommittedTime,
                    userMessageId: messageId,
                    friendId:  state.dialogsPageState.view.selectedFriendId

                };
                appStateStore.dispatch(actionObj_1);

                const actionObj_2 = {
                    type: ActionTypes.setDialogsPage_View_CreatingMessage,
                    message: ''
                };
                appStateStore.dispatch(actionObj_2);
            }
        }
    };
    //----
    let loginPageAttrsVal  = {};
    //----

    ReactDOM.render(
        <BrowserRouter>
                <App profilePageAttrs  = {profilePageAttrsVal}
                     dialogsPageAttrs  = {dialogsPageAttrsVal}
                     loginPageAttrs    = {loginPageAttrsVal}/>
        </BrowserRouter>,
                     document.getElementById('root'));
};
//---

appStateStore.subscribe(rerenderAppVDOM);
//---

//---
let start = ()=>{
    appStateStore.dispatch({
        type: ActionTypes.resetApp
    });


    appStateStore.dispatch({
        type: ActionTypes.setProfilePageState_Model_UserPicURL,
        urlImg: 'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif'
    });
    appStateStore.dispatch({
       type: ActionTypes.setProfilePageState_Model_UserName,
       userName:  'Orange'
    });
    appStateStore.dispatch({
        type: ActionTypes.setProfilePageState_Model_UserBirthDate,
        birthDate: '10.10.2000г.'
    });
    appStateStore.dispatch({
        type: ActionTypes.setProfilePageState_Model_UserCity,
        userCity: 'Минск'
    });
    appStateStore.dispatch({
        type: ActionTypes.setProfilePageState_Model_UserEducation,
        userEducation: 'БГУ 2011'
    });
    appStateStore.dispatch({
        type: ActionTypes.setProfilePageState_Model_UserWebSite,
        userWebSite: 'http://it-kamasutra.com'
    });

};
start();

//---
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
//-- end



//----------------------------------------------------------











