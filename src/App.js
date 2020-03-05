import React from 'react';
import Table from "./Table/Components/Table.jsx";
import './App.css';
import {connect} from "react-redux";
import {
    cancelFiltration,
    makeActive,
    makeInvisible,
    makeVisible,
    moveLeft,
    moveRight,
    setFiltration
} from "./Redux/SettingReducer";
import {
    cancelItemActive,
    deleteItem,
    duplicateItem, makeItemActive,
    sortByProperty
} from "./Redux/DataReducer";

const App = (props) => {

    return (

        <div className="App">
            <Table
                tableHead={props.settings.tableHead}
                tableHeadInvisible={props.settings.tableHeadInvisible}
                moveRight={props.moveRight}
                moveLeft={props.moveLeft}
                makeActive={props.makeActive}
                data={props.data}
                sortByProperty={props.sortByProperty}
                deleteItem={props.deleteItem}
                duplicateItem={props.duplicateItem}
                filtration={props.settings.filtration}
                setFiltration={props.setFiltration}
                cancelFiltration={props.cancelFiltration}
                makeVisible={props.makeVisible}
                makeInvisible={props.makeInvisible}
                cancelItemActive={props.cancelItemActive}
                makeItemActive={props.makeItemActive}
            />
        </div>
    );
};


let mapStateToProps = (state) => {
    return {
        data: state.data,
        settings: state.settings,
    }
};

export default connect(mapStateToProps,
    {
        moveRight,
        moveLeft,
        makeActive,
        sortByProperty,
        deleteItem,
        duplicateItem,
        setFiltration,
        cancelFiltration,
        makeVisible,
        makeInvisible,
        makeItemActive,
        cancelItemActive,
    }
)(App);
