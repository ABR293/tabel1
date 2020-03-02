import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import style from "./Filter.module.css"

const Filter = (props) => {

    console.log(props);

    let value = '';
    let onValueChange = (element) => {
        return (value = element.currentTarget.value)
    };

    console.log(value);

    return(
        <div className={style.block}>
            <input
                type="text"
                onChange={onValueChange}
            />
            {props.filtration.id !== props.id
                ?
                <button
                    disabled={(value === '')}
                    onClick={() => props.setFiltration(props.id, value)}
                >
                    <i className="fa fa-search" aria-hidden="true"> </i>
                </button>
                :
                <button
                    onClick={() => props.cancelFiltration()}
                >
                    <i className="fa fa-times" aria-hidden="true"> </i>
                </button>
            }
        </div>
    )
};

export default Filter;