import React, {useState} from 'react';
import TableHead from './TableHead/TableHead';
import Exz from "../../exz";
import style from "./Table.module.css"
import {ContextMenuTrigger} from "react-contextmenu";
import Modal from "./Common/Modal";
import RedactWindow from "../Components/RedactWindow/RedactWindow";
import * as ReactDOM from "react-dom";


const Item = (props) => {

    console.log(props);

     let Properties = props.tableHead.map(item => {
         return (<div className={style.item} key={item.id}> {props.properties[item.id-1]}</div>)
     });

    let [isRedactWindowOpen, setRedactWindowOpen] = useState(false);
    let toggleRedactWindow = () => {
        setRedactWindowOpen(!isRedactWindowOpen)
    };

    return (
        <>
            {isRedactWindowOpen && ReactDOM.createPortal(
                <Modal>
                    <RedactWindow
                        close={toggleRedactWindow}
                        id={props.id}
                        properties={props.properties}
                        tableHead={props.tableHead}
                        changeProperty={props.changeProperty}
                    />
                </Modal>,
                document.body
            )}
            <ContextMenuTrigger id={props.id + ''} holdToDisplay={1000}>
                <div className={style.block}>
                    {Properties}
                </div>

            </ContextMenuTrigger>
            <Exz
                id={props.id}
                toggleRedactWindow={toggleRedactWindow}
                deleteItem={props.deleteItem}
                duplicateItem={props.duplicateItem}
            />
        </>

    )
};

const Table = (props) => {

    let ItemData = props.data;

    if (props.filtration.id !== 0){
        ItemData = ItemData.filter(item => {return (
            item.properties[props.filtration.id - 1] === props.filtration.value)
        })
    }

    let Data = ItemData.map(item => {

        if (item){
        return (
            <Item
                key={item.id}
                id={item.id}
                properties={item.properties}
                deleteItem={props.deleteItem}
                duplicateItem={props.duplicateItem}
                changeProperty={props.changeProperty}
                tableHead={props.tableHead}
            />
        )}
    });

    return (
        <>
            <div>
                <TableHead
                    tableHead={props.tableHead}
                    moveRight={props.moveRight}
                    moveLeft={props.moveLeft}
                    makeActive={props.makeActive}
                    sortByProperty={props.sortByProperty}
                    filtration={props.filtration}
                    setFiltration={props.setFiltration}
                    cancelFiltration={props.cancelFiltration}
                />
                {Data}
            </div>
        </>
    )
};


export default Table;



