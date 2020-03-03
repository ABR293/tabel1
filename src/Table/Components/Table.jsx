import React, {useState} from 'react';
import TableHead from './TableHead/TableHead';
import Item from "../TableItem";

const Table = (props) => {

    console.log(props);



    let ItemData = props.data;

    if (props.filtration.id !== 0){
        ItemData = ItemData.filter(item => {return (
            item.properties[props.filtration.id - 1] === props.filtration.value)
        })
    }
    let Data = ItemData.map(item => {
        if (item){
            console.log(item);
        return (
            <Item
                key={item.id}
                id={item.id}
                properties={item.properties}
                deleteItem={props.deleteItem}
                duplicateItem={props.duplicateItem}
                changeProperty={props.changeProperty}
                tableHead={props.tableHead}
                activity={item.activity}
                makeItemActive={props.makeItemActive}
                cancelItemActive={props.cancelItemActive}
            />
        )}
        else{}
    });

    return (
        <>
            <div>
                <TableHead
                    tableHead={props.tableHead}
                    tableHeadInvisible={props.tableHeadInvisible}
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
                {Data}
            </div>
        </>
    )
};


export default Table;



