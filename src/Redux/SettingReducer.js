
const MOVIE_RIGHT = 'MOVIE-RIGHT';
const MAKE_ACTIVE = 'MAKE_ACTIVE';
const SET_FILTRATION = 'SET-FILTER';
const CANCEL_FILTRATION = 'CANCEL-FILTRATION';

export const moveRight = (pos) =>({type:MOVIE_RIGHT, pos:pos, direction: 1});
export const moveLeft = (pos) =>({type:MOVIE_RIGHT, pos:pos, direction: -1});
export const makeActive = (id) =>({type:MAKE_ACTIVE, id:id});
export const setFiltration = (id, value) => ({type:SET_FILTRATION , id:id, value:value});
export const cancelFiltration = () => ({type: CANCEL_FILTRATION,});

let initialState = {

    filtration:{id: 0, value: ''} ,

    tableHead: [
        {
            name:"Имя",
            id: 1,
            activity: false,
            visibility: true,
        },
        {
            name:"Фамилия",
            id:2,
            activity: false,
            visibility: true,
        },
        {
            name:"Вид спорта",
            id:3,
            activity: false,
            visibility: true,
        },
        {
            name:"Возраст",
            id:4,
            activity: false,
            visibility: true,
        },
        {
            name:"Золотые медали",
            id:5,
            activity: false,
            visibility: true,
        }
        ],
};

let move = (date, i, direction) => {
    let n = date[i+direction];
    date[i+direction] = date[i];
    date[i] = n;
    return date;
};




export const SettingReducer = (state = initialState, action) => {

    switch (action.type) {

        case MOVIE_RIGHT: {

            return {...state, tableHead: move(state.tableHead, action.pos, action.direction)}
        }
        case MAKE_ACTIVE: {

            return {
                ...state, tableHead: state.tableHead.map(item => {
                    if (item.id === action.id) {
                        return {...item, activity: true}
                    } else {
                        return {...item, activity: false}
                    }

                })
            }
        }
        case SET_FILTRATION: {
            return {...state, filtration:{id: action.id , value: action.value}}
        }
        case CANCEL_FILTRATION: {
            return {...state, filtration:{id: 0, value: ''} }
        }

        default: {
            return {...state}
        }
    }
};



