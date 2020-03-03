import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import style from "./Filter.module.css"

const Filter = (props) => {

    const [value, setValue] = useState('');

    let FilterInput = React.createRef();

    let onValueChange = () => {
        setValue(FilterInput.current.value);
    };

    return (
        <div className={style.block}>
            <input
                type="text"
                onChange={onValueChange}
                ref={FilterInput}
            />
            {props.filtration.id !== props.id
                ?
                <button
                    disabled={(value === '')}
                    onClick={() => {
                        props.setFiltration(props.id, value);
                        setValue('')
                    }}
                >
                    <i className="fa fa-search" aria-hidden="true"> </i>
                </button>
                :
                <>
                    {
                        value === ''
                            ?
                            <button
                                onClick={() => {
                                    props.cancelFiltration();
                                    FilterInput.current.value = '';
                                }}
                            >
                                <i className="fa fa-times" aria-hidden="true"> </i>
                            </button>
                            :
                            <button
                                disabled={(value === '')}
                                onClick={() => {
                                    props.setFiltration(props.id, value);
                                    setValue('')
                                }}
                            >
                                <i className="fa fa-search" aria-hidden="true"> </i>
                            </button>
                    }
                </>

            }
        </div>
    )
};

export default Filter;