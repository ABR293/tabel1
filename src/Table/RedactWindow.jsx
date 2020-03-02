import React from 'react';
import style from './RedactWindow.module.css'

const RedactWindow = (props) => {

    let Body = props.tableHead.map(item => {
        return (
            <div className={style.item} key={item.id}>
                <p>{item.name + ":"}</p>
                <input type={item.filter} defaultValue={props.properties[props.tableHead.indexOf(item)]}/>
            </div>

        )
    });


    return (
        <div className={style.backdrop}>
            <div className={style.block}>
                {Body}
                <button
                    onClick={() => {
                        props.close()
                    }}
                >Ok
                </button>
            </div>
        </div>
    )
};

export default RedactWindow;



