import React from 'react';
import style from "./UserStatusBlock.module.css";


const UserStatusBlock = (props) => {

    return (
        <div className={style.userStatusBlock}>
          Статус:
            {(props.creatingUserStatus === null) ?
                <span className={style.userStatusText} onClick={props.onUserStatusChangeRequest}>
                    {props.status}
                </span> :
                <>
                    <input className={style.inputUserStatus} placeholder='измените статус'
                           value={props.creatingUserStatus}
                           onChange={
                               (e) => {
                                   props.onChangeCreatingUserStatus(e.currentTarget.value)
                               }
                           }/>
                    <button className={style.buttonUserStatus}
                            onClick={(e) => {
                                props.onCreatingUserStatusFinishCommitted();
                            }}>
                        add
                    </button>
                </>}
        </div>
    )
};

export default UserStatusBlock;