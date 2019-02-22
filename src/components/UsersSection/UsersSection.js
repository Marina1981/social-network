import React from 'react';
import style from "./UsersSection.module.css";
import {Redirect} from "react-router";
import NavLink from "react-router-dom/es/NavLink";



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
                        <NavLink to={'profile/users/' + user.id} className={style.usersName}>
                            {user.name}
                        </NavLink>
                        <div className={style.userPicBlock}>
                            <img className={style.usersPic} src={user.photo} alt="photo"/>
                        </div>
                        <div className={style.userStatus}>
                            {user.status}
                        </div>
                        <div className={style.userUniqueUrlName}>
                            {user.userUniqueUrlName}
                        </div>
                    </div>
                )
            })
            }
            {
                props.hasNextpageFlag &&
                <button className={style.userButton} onClick={props.getUsersFromServer}>
                    Загрузить ещё
                </button>
            }
        </div>
    )
};


export default UserSection;