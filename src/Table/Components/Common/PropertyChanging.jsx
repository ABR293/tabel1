import React from 'react';
import {PropertyChangingHOC} from "./PropertyChangingHOC";

const PropertyChangingInput = (props) => {

    let value;
    let onValueChange = (element) => {
        return (value = element.currentTarget.value)
    };
    let updateProperty = () => {
        props.changeProperty(props.itemId, props.propertyId, value);
    };
    return(
        <input
            onBlur={updateProperty}
            defaultValue={props.value}
            onChange={onValueChange}
        />
    )
};

export default PropertyChangingHOC(PropertyChangingInput);