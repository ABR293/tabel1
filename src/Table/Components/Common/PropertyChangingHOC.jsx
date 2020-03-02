import React from 'react';
import {connect} from 'react-redux'
import {changeProperty} from "../../../Redux/DataReducer";



export const PropertyChangingHOC = (Component) => {
    class PropertyChanging extends React.Component{
        render(){
            return(<Component {...this.props} />)
        }
    }
    let mapStateToProps = (state) => {
        return { }
    };
    return connect (mapStateToProps, {changeProperty})(PropertyChanging);
};