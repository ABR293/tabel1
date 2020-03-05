import React from 'react';
import style from './RedactWindow.module.css'
import PropertyChangingInput from "../Common/PropertyChanging";

const RedactWindow = (props) => {

    let Body = props.tableHead.sort((prev, next) => {
        if (prev.id < next.id) {
            return -1
        } else {
            return 1
        }

    }).map(property => {
        debugger;
        return (
            <div className={style.item} key={property.id}>
                <p>{property.name + ":"}</p>
                <PropertyChangingInput
                    value={props.properties[property.id -1]}
                    itemId={props.id}
                    propertyId={property.id-1}
                />
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



