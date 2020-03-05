import style from "./Components/Table.module.css";
import {useState} from "react";
import * as ReactDOM from "react-dom";
import Modal from "./Components/Common/Modal";
import {ContextMenuTrigger} from "react-contextmenu";
import React from "react";
import RedactWindow from "./Components/RedactWindow/RedactWindow";
import Exz from "../exz";
import classNames from 'classnames'
import Table from "../App";


const Item = (props) => {

    console.log(props);

    let tableHead = props.tableHead.filter(item => item.visibility === true);

    let Properties = tableHead.map(item => {
            return (<div className={style.item} key={item.id}> {props.properties[item.id - 1]}</div>)
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
                <div
                    className={ props.activity ? classNames(style.block,style.block__active ) : style.block}
                    onDoubleClick={() => {!props.activity ? props.makeItemActive(props.id) : props.cancelItemActive(props.id)} }
                >
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
export default Item;