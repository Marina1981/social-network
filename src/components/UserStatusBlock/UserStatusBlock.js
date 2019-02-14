import React from 'react';
import style from "./UserStatusBlock.module.css";


const UserStatusBlock = (props) => {

    return (
        <div className={style.userStatusBlock}>
         <span className={style.statusTitle}>
             Status:
         </span>
            {(props.creatingUserStatus === null) ?
                <div className={style.userStatusText} onClick={props.onUserStatusChangeRequest}>
                    {props.status}
                </div> :
                <div className={style.userStatusForm}>
                    <input className={style.inputUserStatus} placeholder='change status'
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
                </div>}
        </div>
    )
};

export default UserStatusBlock;