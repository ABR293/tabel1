import React from 'react';
import TableHead from './TableHead';



// const Item = (props) =>{
//     return(
//     <div>
//         <div>{props.name}</div>
//         <div>{props.sport}</div>
//         <div>{props.age}</div>
//         <div>{props.gold}</div>
//     </div>
//     )
// };

const Table = (props)=> {
    console.log(props);
    return(
        <div>
            <TableHead
                tableHead={props.tableHead}
                moveRight={props.moveRight}
                moveLeft={props.moveLeft}
                makeActive={props.makeActive}
            />
        </div>
    )
};




export default Table;



