import React from "react";
import connect from "react-redux/es/connect/connect";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";



class UserInfoSectionContainer extends React.Component {
    //---
    // componentDidMount() {
    //     this.props.onDidMount();
    // }

    //---
    render() {
        return <UserInfoSection {...this.props} />
    }
}

//---


//----
const mapStateToProps = (state) => {
    return{
        isAuth:    state.auth.userAuthData.userId !== null, // true / false

    }
};
const mapDispatchToProps = (dispatch) => ({
    // onDidMount: () => {
    //     dispatch(setReceivedServerUsers());
    // }
});

//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UserInfoSectionContainer);
//---