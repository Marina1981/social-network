import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import userPic from './InfoComponent/images/apelsin2.png';


//////////////////////////////
///      CAppStateStore    ///
//////////////////////////////
class CAppStateStore
{
    //---
    _state = null;
    //---
    _onActionCallback =  null;
    //==========================================================
    constructor(){}
    //----------------------------------------------------------
    subscribe = (onActionCallback)=>{
        this._onActionCallback = onActionCallback;
    };
    //----------------------------------------------------------
    getState = ()=>{
        return this._state;
    };
    //----------------------------------------------------------
    reset_state_action = ()=>{
        this._state = {
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
                        userPicURL:'',
                        userName:'',
                        userBirthDate:'',
                        userCity: '',
                        userEducation: '',
                        userWebSite: ''
                    },
                    wall:{
                        messagesList:[

                        ]//['text1', 'text2']  -> [{text:'text1', like: 0}, {text:'text1', like: 0}]
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
                    friendsContactsDossier: null
                },
                view:{
                    selectedFriendId: '',
                    creatingMessage: ''
                },

            }
            //----
        };

        this._onActionCallback();
    };
    //----------------------------------------------------------
    //------------------------Action--------------------------//
    //----------------------------------------------------------

    //----------------------ProfilePage-----------------------//

    setProfilePageState_Model_UserPicURL_Action = (urlImg)=>{
        this._state.profilePageState.model.userInfo.userPicURL = urlImg;

        this._onActionCallback();
    };
    //----------------------------------------------------------
    setProfilePageState_Model_UserName_Action = (userName)=>{
        this._state.profilePageState.model.userInfo.userName = userName;

        this._onActionCallback();
    };
    //----------------------------------------------------------
    setProfilePageState_Model_UserBirthDate_Action = (birthDate)=>{
        this._state.profilePageState.model.userInfo.userBirthDate = birthDate;

        this._onActionCallback();
    };
    //----------------------------------------------------------
    setProfilePageState_Model_UserCity_Action = (userCity)=>{
        this._state.profilePageState.model.userInfo.userCity = userCity;

        this._onActionCallback();
    };
    //----------------------------------------------------------
    setProfilePageState_Model_UserEducation_Action = (userEducation)=>{
        this._state.profilePageState.model.userInfo.userEducation = userEducation;

        this._onActionCallback();
    };
    //----------------------------------------------------------
    setProfilePageState_Model_UserWebSite_Action = (userWebSite)=>{
        this._state.profilePageState.model.userInfo.userWebSite = userWebSite;

        this._onActionCallback();
    };
    //----------------------------------------------------------
    setProfilePageState_Model_AddMessage_Action = (message)=>{
        let  newMessageList = [message,...this._state.profilePageState.model.wall.messagesList];

        this._state.profilePageState.model.wall.messagesList = newMessageList;

        this._onActionCallback();
    };
    //----------------------------------------------------------
    setProfilePageState_View_CreatingMessage_Action = (message)=>{
        this._state.profilePageState.view.wall.creatingMessage =  message;

        this._onActionCallback();
    };
    //----------------------------------------------------------

    //----------------------DialogsPage-----------------------//

    //----------------------------------------------------------
   /* setDialogsPageState_Model_FriendsList_Action = (friend) =>{
        let newFriendsList = [...this._state.dialogsPageState.model.friendsInfo.friendList, friend];

        this._state.dialogsPageState.model.friendsInfo.friendList = newFriendsList;

        this._onActionCallback();
    };*/
    //----------------------------------------------------------

    //----------------------------------------------------------
   /* setDialogsPageState__Model_AddMessage_Action = (message) => {
        let newMessageList = [...this._state.dialogsPageState.model.friendsInfo.friendsMessage, message];

        this._state.dialogsPageState.model.friendsInfo.friendsMessage = newMessageList;

        this._onActionCallback();
    };*/
    //----------------------------------------------------------
    //----------------------------------------------------------
    //----------------------------------------------------------
    //----------------------------------------------------------



}
//////////////////////////////
//-- begin
let  appStateStore = new CAppStateStore(); // создается объект хранилища состояния приложения класса  CAppStateStore
                                           // и ссылка на него заносится в переменную appStateStore
//---
let rerenderAppVDOM = ()=>{
    const state = appStateStore.getState();

    //----
    let profilePageAttrsVal = {
          profile:{
              userInfo: {
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
                      appStateStore.setProfilePageState_View_CreatingMessage_Action(message);
                  },
                  onCreatingMessageFinishCommitted: ()=>{
                      appStateStore.setProfilePageState_Model_AddMessage_Action(state.profilePageState.view.wall.creatingMessage);
                      appStateStore.setProfilePageState_View_CreatingMessage_Action('');
                  }

              }
          }
    };
    //----
    let dialogPageAttrsVal = {
      /*  dialogs:{
            friendsInfo:{
                friendList:      state.dialogsPageState.model.friendsInfo.friendList,
                friendsMessage:  state.dialogsPageState.model.friendsInfo.friendsMessage,


            }
        }*/
    };
    //----
    let loginPageAttrsVal  = {};
    //----

    ReactDOM.render(<App profilePageAttrs = {profilePageAttrsVal}
                         dialogPageAttrs  = {dialogPageAttrsVal}
                         loginPageAttrs   = {loginPageAttrsVal}/>,
                     document.getElementById('root'));
};
//---

appStateStore.subscribe(rerenderAppVDOM);
//---
appStateStore.reset_state_action();
//---
let start = ()=>{
    appStateStore.setProfilePageState_Model_UserPicURL_Action(userPic);
    appStateStore.setProfilePageState_Model_UserName_Action('Orange');
    appStateStore.setProfilePageState_Model_UserBirthDate_Action('10.10.2000г.');
    appStateStore.setProfilePageState_Model_UserCity_Action('Минск');
    appStateStore.setProfilePageState_Model_UserEducation_Action(' БГУ 2011');
    appStateStore.setProfilePageState_Model_UserWebSite_Action('http://it-kamasutra.com');
};
start();

//---
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
//-- end


//----------------------------------------------------------











