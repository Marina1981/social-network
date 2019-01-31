import React      from 'react';
import {connect}  from "react-redux";
import MainHeader from "../../components/MainHeader/MainHeader";
import {me}       from "../../redux/modules/authRedux";


class MainHeaderContainer extends React.Component {
    //---
    componentWillMount() {
        this.props.me();
    }

    //---
    render() {
        return <MainHeader {...this.props} />
    }
}

//---
const mapStateToProps = (state) => {
    return {
        isAuth:   state.auth.isAuth,
        userId:   state.auth.userInfo.userId,
        userName: state.auth.userInfo.userName,
        userPic:  state.auth.userInfo.userPic
    }
};

const mapDispatchToProps = (dispatch) => ({
    me: () => {
        dispatch(me());
    }
});
//----
export default connect(
    mapStateToProps,
    mapDispatchToProps)(MainHeaderContainer);
