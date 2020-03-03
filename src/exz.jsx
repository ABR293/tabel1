import React from 'react';
import {ContextMenu, MenuItem} from "react-contextmenu";
import style from "./Style1.module.css";


export default class ItemMenu extends React.Component {
    render() {
        return (
            <div>
                <ContextMenu id={this.props.id+''} className={style.menuBlock}>
                    <MenuItem onClick={()=> this.props.duplicateItem(this.props.id)}>Duplicate</MenuItem>
                    <MenuItem onClick={() => this.props.toggleRedactWindow()}>Redact</MenuItem>
                    <MenuItem onClick={() => this.props.deleteItem(this.props.id)}>Delete</MenuItem>
                </ContextMenu>
            </div>
        );
    }
}


// export default class SimpleMenu extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <ContextMenu id={this.props.id+''} className={style.menuBlock}>
//                     <MenuItem onClick={()=> this.props.duplicateItem(this.props.id)}>Duplicate</MenuItem>
//                     <MenuItem onClick={() => this.props.toggleRedactWindow()}>Redact</MenuItem>
//                     <MenuItem onClick={() => this.props.deleteItem(this.props.id)}>Delete</MenuItem>
//                 </ContextMenu>
//             </div>
//         );
//     }
// }
