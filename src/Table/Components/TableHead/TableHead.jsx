import React from 'react';
import style from './TableHead.module.css';
import 'font-awesome/css/font-awesome.min.css';
import Filter from "./Filter";
import Table from "../../../App";

const Item = (props) =>{
    console.log(props);
    return(
        <div className={style.item}>
            <div className={style.block}>
                <button
                    onClick={()=>{props.moveLeft(props.pos)}}
                    disabled={props.pos === 0}
                ><i className="fa fa-chevron-left" aria-hidden="true"> </i></button>

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
                    disabled={props.pos === 4}
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

    let tableHead = props.tableHead.map(item =>
        <Item
            name={item.name}
            pos={props.tableHead.indexOf(item)}
            key={item.id}
            id={item.id}
            activity={item.activity}
            moveRight={props.moveRight}
            moveLeft={props.moveLeft}
            makeActive={props.makeActive}
            sortByProperty={props.sortByProperty}
            filtration={props.filtration}
            setFiltration={props.setFiltration}
            cancelFiltration={props.cancelFiltration}
        />);

    return(
        <div className={style.header}>
            {tableHead}
        </div>
    )
};

export default TableHead;
