import React from 'react';
import connect from "react-redux/es/connect/connect";
import UsersSection from "../../components/UsersSection/UsersSection";


const UsersSectionContainer = (props) => {
    return <UsersSection {...props}/>
};

//----
const mapStateToProps = (state) => {
    return{
        // isAuth:                state.auth.userAuthData.userId !== null, // true / false

    }
};
const mapDispatchToProps = (dispatch) => {
    return {}
};

//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UsersSectionContainer);
//---