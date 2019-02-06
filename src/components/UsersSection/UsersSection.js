import React from 'react';
import style from "./UsersSection.module.css";
import {Redirect} from "react-router";



const UserSection = (props) => {
    //---
    if (!props.isAuth){
        return <Redirect to="/Login"/>
    }
    //---

   return (
       <div className={style.usersSection}>
          <div className={style.userLabel}>
              Users :
          </div>
           {props.usersList.map((user) => {
               return (
                   <div className={style.usersList}>
                       <div className={style.usersName}>
                           {user.userName}
                       </div>
                       <img className={style.usersPic}  src={user.userPicURL}/>
                       <div>
                           {user.userStatus}
                       </div>
                   </div>
               )
           })
           }
       </div>
   )
};

export default UserSection;