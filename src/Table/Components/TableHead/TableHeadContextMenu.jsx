import React from 'react';
import {ContextMenu, MenuItem} from "react-contextmenu";
import style from "../../../Style1.module.css";


export default class TableHeadMenu extends React.Component {
    render () {

        let VisibleItems = this.props.tableHead.map( item => {

           return(
               <MenuItem
                   className={style.item}
                   onClick={()=> { this.props.makeInvisible(item.id)}}
               >
                   {item.name}
                   <i className="fa fa-eye-slash" aria-hidden="true"> </i>
                   </MenuItem>
           )
        });

        let InvisibleItems = this.props.tableHeadInvisible.map( item => {
            debugger;
            return(
                <MenuItem
                    className={style.item}
                    onClick={()=> { this.props.makeVisible(item.id)}}
                >
                    {item.name}
                    <i className="fa fa-eye" aria-hidden="true"> </i>
                    </MenuItem>
            )
        });

        return (
            <div>
                <ContextMenu id={this.props.id+''}
                             className={style.menuBlock}
                    >
                    {VisibleItems}
                    {InvisibleItems}
                </ContextMenu>
            </div>
        );
    }
}