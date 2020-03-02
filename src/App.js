import React from 'react';
import Table from "./Table/Table.jsx";

import './App.css';
import {connect} from "react-redux";
import {makeActive, moveLeft, moveRight} from "./Redux/SettingReducer";
import {deleteItem, duplicateItem, sortByAge} from "./Redux/DataReducer";

const App = (props) => {

    console.log(props);

    return (

    <div className="App">
        <Table
            tableHead={props.settings.tableHead}
            moveRight={props.moveRight}
            moveLeft={props.moveLeft}
            makeActive={props.makeActive}
            data={props.data}
            sortByAge={props.sortByAge}
            deleteItem={props.deleteItem}
            duplicateItem={props.duplicateItem}
        />
    </div>
  );
};



let mapStateToProps = (state) => {
    return {
        data:state.data,
        //theme: state.settings.theme,
        settings: state.settings,
    }
};

export default connect( mapStateToProps, {moveRight, moveLeft, makeActive, sortByAge, deleteItem, duplicateItem})(App);
