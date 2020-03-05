
const MOVIE_RIGHT = 'SettingReducer/MOVIE-RIGHT';
const MAKE_ACTIVE = 'SettingReducer/MAKE_ACTIVE';
const SET_FILTRATION = 'SettingReducer/SET-FILTER';
const CANCEL_FILTRATION = 'SettingReducer/CANCEL-FILTRATION';
const MAKE_INVISIBLE = 'SettingReducer/MAKE-INVISIBLE';
const MAKE_VISIBLE = 'SettingReducer/MAKE-VISIBLE';


export const moveRight = (pos) =>({type:MOVIE_RIGHT, pos:pos, direction: 1});
export const moveLeft = (pos) =>({type:MOVIE_RIGHT, pos:pos, direction: -1});
export const makeActive = (id) =>({type:MAKE_ACTIVE, id:id});
export const setFiltration = (id, value) => ({type:SET_FILTRATION , id:id, value:value});
export const cancelFiltration = () => ({type: CANCEL_FILTRATION,});
export const makeInvisible = (id) => ({type: MAKE_INVISIBLE, id:id});
export const makeVisible = (id) => ({type: MAKE_VISIBLE, id:id});

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
            name:"Медали",
            id:5,
            activity: false,
            visibility: true,
        }
        ],
    tableHeadInvisible:[

    ]
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
        case MAKE_INVISIBLE:{
            let tableHead = state.tableHead.filter(item => item.id !== action.id);
            state.tableHeadInvisible.push(
                ...state.tableHead.filter(item => item.id === action.id));
            return {...state, tableHead: tableHead}
        }
        case MAKE_VISIBLE:{
            let newTableHeadInvisible = state.tableHeadInvisible.filter(item => item.id !== action.id);
            state.tableHead.push(
                ...state.tableHeadInvisible.filter(item => item.id === action.id));
            state.tableHead.sort((prev,next) => {
                if (prev.id > next.id){return -1}
                else{return 1}
            });
            return {...state, tableHeadInvisible: newTableHeadInvisible}
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



