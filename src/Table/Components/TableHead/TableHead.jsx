import React from 'react';
import style from './TableHead.module.css';
import 'font-awesome/css/font-awesome.min.css';
import Filter from "./Filter";
import {ContextMenuTrigger} from "react-contextmenu";
import TableHeadContextMenu from "./TableHeadContextMenu";

const Item = (props) =>{

    return(
        <div className={style.item}>
            <div className={style.block}>
                <button
                    onClick={()=>{props.moveLeft(props.pos)}}
                    disabled={props.pos === 0}
                ><i className="fa fa-chevron-left" aria-hidden="true"> </i></button>

                <button
                    onClick={() => props.makeInvisible(props.id)}
                >
                    <i className="fa fa-eye-slash" aria-hidden="true"> </i></button>

                <button
                    onClick={() => {
                        props.makeActive(props.id);
                        props.sortByProperty(props.id)}}
                >
                    {props.name}
                    {props.activity && <i className="fa fa-chevron-down" aria-hidden="true"> </i>}
                </button>

                <button
                    onClick={()=>{props.moveRight(props.pos)}}
                    disabled={props.pos === props.tableHeadLength-1}
                ><i className="fa fa-chevron-right" aria-hidden="true"> </i></button>
            </div>
            <Filter
                filtration={props.filtration}
                id={props.id}
                setFiltration={props.setFiltration}
                cancelFiltration={props.cancelFiltration}
            />
        </div>
    )
};


const TableHead = (props) => {

    let MenuID = "MenuID";
    let tableHeadLength = props.tableHead.length;
    let tableHead = props.tableHead.map(item => {
            return (
                <Item
                    name={item.name}
                    pos={props.tableHead.indexOf(item)}
                    key={item.id}
                    id={item.id}
                    tableHeadLength={tableHeadLength}
                    activity={item.activity}
                    moveRight={props.moveRight}
                    moveLeft={props.moveLeft}
                    makeActive={props.makeActive}
                    sortByProperty={props.sortByProperty}
                    filtration={props.filtration}
                    setFiltration={props.setFiltration}
                    cancelFiltration={props.cancelFiltration}
                    makeVisible={props.makeVisible}
                    makeInvisible={props.makeInvisible}
                />
            )
    });

    return (
        <>
            <ContextMenuTrigger id={MenuID} holdToDisplay={1000}>
                <div className={style.header}>
                    {tableHead}
                </div>
            </ContextMenuTrigger>
            <TableHeadContextMenu
                id={MenuID}
                tableHead={props.tableHead}
                tableHeadInvisible={props.tableHeadInvisible}
                makeVisible={props.makeVisible}
                makeInvisible={props.makeInvisible}
            />
        </>
    )
};

export default TableHead;
