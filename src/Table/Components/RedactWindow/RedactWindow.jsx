import React from 'react';
import style from './RedactWindow.module.css'
import PropertyChangingInput from "../Common/PropertyChanging";

const RedactWindow = (props) => {

    let Body = props.tableHead.map(property => {

        console.log(props);

        return (
            <div className={style.item} key={property.id}>
                <p>{property.name + ":"}</p>
                <PropertyChangingInput
                    type={property.filter}
                    value={props.properties[props.tableHead.indexOf(property)]}
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



