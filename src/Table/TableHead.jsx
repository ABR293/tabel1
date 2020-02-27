import React from 'react';
import style from './TableHead.module.css';

const Item = (props) =>{
    console.log(props);
    return(
        <>
            <div className={style.block}>
                <button
                    onClick={()=>{props.moveLeft(props.pos)}}
                    disabled={props.pos === 0}
                >L</button>

                <button
                    onClick={() => {props.makeActive(props.id)}}
                    disabled={props.activity}
                >{props.name}</button>

                <button
                    onClick={()=>{props.moveRight(props.pos)}}
                    disabled={props.pos === 3}
                >R</button>
            </div>
            <div>
                {/*Filter*/}
            </div>
        </>
    )
};

//let tableHead1 = ["Имя","Спорт","Возраст","Золотые медали"];


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
        />);

    return(
        <div className={style.header}>
            {tableHead}
        </div>
    )
};

export default TableHead;
