import React from 'react';
import style from "./UsersSection.module.css";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";


const UserSection = (props) => {
    //---
    if (!props.isAuth) {
        return <Redirect to="/Login"/>
    }
    //---

    return (
        <div className={style.usersListSection}>
            <div className={style.userLabel}>
                Users :
            </div>
            {props.usersList.map((user) => {
                return (
                    <div className={style.usersList}>
                        <NavLink to={'/user/' + user.id} className={style.usersName}>
                            {user.userName}
                        </NavLink>
                        <div className={style.userPicBlock}>
                            <img className={style.usersPic} src={user.userPicURL}/>
                        </div>
                        <div className={style.userStatus}>
                            {user.userStatus}
                        </div>
                        <div className={style.userUniqueUrlName}>
                            {user.userUniqueUrlName}
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
};

export default UserSection;