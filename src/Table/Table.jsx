import React, {useState} from 'react';
import TableHead from './TableHead';
import Exz from "../exz";
import style from "./Table.module.css"
import {ContextMenuTrigger} from "react-contextmenu";
import Modal from "./Common/Modal";
import RedactWindow from "./RedactWindow";
import * as ReactDOM from "react-dom";


const Item = (props) => {

    console.log(props);

    let Properties = props.tableHead.map(item => {
        return (<div className={style.item} key={item.id}> {props.properties[props.tableHead.indexOf(item)]}</div>)
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
    console.log(props);

    let Data = props.data.map(item => {

        if (item){
        return (
            <Item
                key={item.id}
                id={item.id}
                properties={item.properties}
                deleteItem={props.deleteItem}
                duplicateItem={props.duplicateItem}
                tableHead={props.tableHead}
                Setting ={props.tableHead.map()}


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
                    sortByAge={props.sortByAge}
                />
                {Data}
            </div>
        </>
    )
};


export default Table;



