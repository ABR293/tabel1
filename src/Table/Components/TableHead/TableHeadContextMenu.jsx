import React from 'react';
import {ContextMenu, MenuItem} from "react-contextmenu";
import style from "../../../Style1.module.css";


export default class TableHeadMenu extends React.Component {
    render () {

        let MenuBody = this.props.tableHead.map( item => {

           return(
               <MenuItem
                   className={style.item}
                   onClick={()=> {item.visibility ? this.props.makeInvisible(item.id) : this.props.makeVisible(item.id)}}
               >
                   {item.name}
                   {item.visibility
                       ? <i className="fa fa-eye-slash" aria-hidden="true"> </i>
                       : <i className="fa fa-eye" aria-hidden="true"> </i>
                   }</MenuItem>
           )
        });


        return (
            <div>
                <ContextMenu id={this.props.id+''}
                             className={style.menuBlock}
                    >
                    {MenuBody}
                </ContextMenu>
            </div>
        );
    }
}